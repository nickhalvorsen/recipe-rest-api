module.exports = function(app) {
    var recipeList = require('../controllers/recipeListController.js');

    app.route('/recipes')
        .get(recipeList.listAll)
        .post(recipeList.create);

    app.route('/recipes/:recipeId')
        .get(recipeList.listSingle)
        .put(recipeList.update)
        .delete(recipeList.delete);
};
