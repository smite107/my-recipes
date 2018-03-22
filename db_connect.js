class DB {
	connect(user, password, host, database) {
		this.mysql      = require("mysql");
		this.con = this.mysql.createConnection({
		  host     : host,
		  user     : user,
		  password : password,
		  database : database
		});

		this.con.connect(function(err) {
		  if (err) {
		  	throw err;
		  }
		  console.log("Database connected!");
		});
	}

	createDB(name) {
		this.con.query("CREATE DATABASE " + name, function (err, result) {
		  if (err) {
		  	throw err;
		  }
		  console.log("Database created");
		});
	}

	insert(table, item, returnId) {
		var names = [];
		var values = [];
		for (var name in item) {
	  		if (item.hasOwnProperty(name)) {
	  			names.push(name);
	  			values.push(item[name]);
	  		}
  		}
	  	names = names.join(",");
	  	values = values.map((value) => ("'" + (typeof value == 'object' ? JSON.stringify(value) : value) + "'")).join(",");

		var sql = "INSERT INTO " + table + " (" + names + ") VALUES (" + values + ")";
	  	this.con.query(sql, function (err, result) {
	    if (err) {
	    	throw err;
	    }
	    console.log("1 record inserted");
	    if (returnId) {
	    	return insertId;
	    }
	  });
	}

	select(sql, callback) {
		console.log(sql);
		this.con.query(sql, function (err, result, fields) {
		    if (err) {
		    	throw err;
		    }
		    callback(result);
	  	});
	}
	
	/*createTable(name, rows) {
		//name VARCHAR(255), address VARCHAR(255)
		var sql = "CREATE TABLE " + name + " (" + rows + ")";
	  this.con.query(sql, function (err, result) {
	    if (err) throw err;
	    console.log("Table created");
	  });
	}*/
}

module.exports = new DB()