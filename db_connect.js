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

	insert(table, item, callback) {
		let names = [];
		let values = [];
		for (let name in item) {
	  		if (item.hasOwnProperty(name)) {
	  			names.push(name);
	  			values.push(item[name]);
	  		}
  		}
	  	names = names.join(",");
	  	values = values.map((value) => ("'" + (typeof value == 'object' ? JSON.stringify(value) : value) + "'")).join(",");

		let sql = "INSERT INTO " + table + " (" + names + ") VALUES (" + values + ")";
		console.log(sql);
	  	this.con.query(sql, function (err, result) {
		    if (err) {
		    	throw err;
		    }
		    console.log("1 record inserted, ID " + result.insertId);
	    	callback(result.insertId);
	  	});
	}

	select(sql, callback) {
		//console.log(sql);
		this.con.query(sql, function (err, result, fields) {
		    if (err) {
		    	throw err;
		    }
		    callback(result);
	  	});
	}

	update(table, item, where, callback) {
		let set = [];
		for (let name in item) {
	  		if (item.hasOwnProperty(name)) {
	  			let value = item[name];
	  			set.push(name + " = " + ("'" + (typeof value == 'object' ? JSON.stringify(value) : value) + "'"));
	  		}
  		}
	  	set = set.join(",");
	  	let sql = "UPDATE " + table + " SET " + set + " WHERE " + where;
		//console.log(sql);
	  	this.con.query(sql, function (err, result) {
		    if (err) {
		    	throw err;
		    }
		    console.log(result.affectedRows + " record(s) updated");
		    callback(result);
	  	});
	}
}

module.exports = new DB()