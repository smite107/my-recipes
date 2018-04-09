let express = require("express");
let db      = require("./db_connect");
let app     = express();

app.use(express.json({ type: '*/*' }));

db.connect("smite", "smite107", "localhost", "recipes");
/*
db.insert("recipes", {
  name: "Крылышки Буффало",
  category: 3,
  description: "Традиционно крылышки Буффало жарят во фритюре. Встречаются как варианты без панировки, так с ней. Я использовала такую: 0,5 стакана муки смешать с 1 ч. л. кайенского перца, 1 ч. л. соли и 1-2 ч. л. паприки. Крылышки обвалять в панировке (удобно это делать в пакете) и обжарить до готовности во фритюре. Готовые крылышки откинуть на сито или выложить на бумажные полотенца. Пока крылышки запекаются, приготовьте сырный соус. Для этого все ингредиенты нужно измельчить в блендере. Соус необязательно должен быть однородным, пусть останется слегка комковатым.",
  ingredients: "[{name: 'Крылья куриные', count: '1,2 кг'}, {name: 'Соль', count: '1 ч. л.'}, {name: 'Масло сливочное', count: '60 г'}, {name: 'Сахар коричневый', count: '2 ст. л.'}]"
});*/

/*
db.insert("recommended", {
  recipeId: 1,
  recommendedId: 2
});*/

app.get('/getAllCategories', function (req, res) {
  db.select("SELECT * FROM categories", function(result){
    res.send(result);
  });
});

app.get('/getCategory/:id', function (req, res) {
  const id = req.params.id;
  db.select("SELECT * FROM categories WHERE id = " + id, function(result) {
    res.send(result[0]);
  });
});

app.get('/getRecipesList/:categoryId', function (req, res) {
  const categoryId = req.params.categoryId;
  db.select("SELECT id, name FROM recipes WHERE category = " + categoryId, function(result) {
    res.send(result);
  });
});

app.post('/getRecipeByName', function (req, res) {
  const name = req.body.name;
  db.select("SELECT id, name FROM recipes WHERE name LIKE '%" + name + "%'", function(result) {
    res.send(result);
  });
});

app.get('/getRecommendedRecipesList/:recipeId', function (req, res) {
  const recipeId = req.params.recipeId;
  db.select("SELECT id, name FROM recommended as rec INNER JOIN recipes as r ON rec.recommendedId = r.id WHERE recipeId = " + recipeId, function(result) {
    res.send(result);
  });
});

app.get('/getRecipe/:id', function (req, res) {
  const id = req.params.id;
  db.select("SELECT id, name, description, ingredients, category as categoryId, " +
              "(SELECT name FROM categories as c WHERE c.id = r.category) as categoryName " + 
            "FROM recipes as r WHERE r.id = " + id, function(result) {

    if (result && result[0]) { // ???
      result[0].ingredients = JSON.parse(result[0].ingredients);
    }
    
    //console.log(result);
    res.send(result[0]);
  });
});

app.post('/updateRecipe', function (req, res) {
  const id = req.body.id;
  db.update("recipes", req.body.recipe, "id = " + id, function(result) {
    res.send(true);
  });
});

app.post('/addRecipe', function (req, res) {
  db.insert("recipes", req.body.recipe, function(result) {
    res.send(result.toString());
  });
});

app.listen(3003, function () {
  console.log('Start server on port 3003!');
});