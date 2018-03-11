var express = require('express');
var app = express();

app.get('/getAllCategories', function (req, res) {
  const categories = [
    {
      id  : 1,
      name: "Завтраки"
    }, {
      id  : 2,
      name: "Полдники"
    }, {
      id  : 3,
      name: "Основные блюда"
    }, {
      id  : 4,
      name: "Гарниры"
    }, {
      id  : 5,
      name: "Десерты"
    }
  ];
  res.send(categories);
});

app.get('/getCategory/:id', function (req, res) {
  const id = req.params.id;
  const categories = [
    {
      id  : 1,
      name: "Завтраки"
    }, {
      id  : 2,
      name: "Полдники"
    }, {
      id  : 3,
      name: "Основные блюда"
    }, {
      id  : 4,
      name: "Гарниры"
    }, {
      id  : 5,
      name: "Десерты"
    }
  ];
  res.send(categories.find((c) => (c.id == id)));
});

app.get('/getRecipesList/:categoryId', function (req, res) {
  const categoryId = req.params.categoryId;
  const recipes = [
    {
      id  : 1,
      name: "Картошка фри"
    }, {
      id  : 2,
      name: "Супер-горох"
    }, {
      id  : 3,
      name: "Крылышки Буффало"
    }
  ];
  res.send(recipes);
});

app.get('/getRecipe/:id', function (req, res) {
  const id = req.params.id;
  const recipe = {
    id      : 3,
    name    : "Крылышки Буффало",
    category: {
      id  : 3,
      name: "Основные блюда"
    },
    description: "Традиционно крылышки Буффало жарят во фритюре. Встречаются как варианты без панировки, так с ней. Я использовала такую: 0,5 стакана муки смешать с 1 ч. л. кайенского перца, 1 ч. л. соли и 1-2 ч. л. паприки. Крылышки обвалять в панировке (удобно это делать в пакете) и обжарить до готовности во фритюре. Готовые крылышки откинуть на сито или выложить на бумажные полотенца. Пока крылышки запекаются, приготовьте сырный соус. Для этого все ингредиенты нужно измельчить в блендере. Соус необязательно должен быть однородным, пусть останется слегка комковатым.",
    ingredients: [
      {name: "Крылья куриные", count: "1,2 кг"}, 
      {name: "Соль", count: "1 ч. л."}, 
      {name: "Масло сливочное", count: "60 г"}, 
      {name: "Сахар коричневый", count: "2 ст. л."}, 
      {name: "Томатная паста", count: "3 ст. л."}, 
      {name: "Чеснок", count: "2 зуб."}, 
      {name: "Перец черный", count: ""}, 
      {name: "Соус чили", count: ""}
    ],
    recommended: [{
      id  : 1,
      name: "Картошка фри"
    }, {
      id  : 2,
      name: "Супер-горох"
    }]
  };
  res.send(recipe);
});

app.listen(3002, function () {
  console.log('Start server on port 3002!');
});