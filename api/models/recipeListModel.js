var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter the name'
    }
    , description: {
        type: String
    }
    , author: {
        type: String
    }
    , ingredients: [ String ]
    , steps: [ String ]
},
{
    timestamps: true
});

module.exports = mongoose.model('Recipes', RecipeSchema);
