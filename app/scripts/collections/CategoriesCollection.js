import Backbone from 'backbone';
import _ from 'underscore';


import CategoryModel from '../models/CategoryModel';

const CategoriesCollection = Backbone.Collection.extend({
  model: CategoryModel,
  url: `http://jservice.io/api/category?id=4`,
  makeNewGame: function(gameState){
    // console.log(gameState);
    this.reset();

    _(6).times(() => {
      this.add({});
    });

    this.each((categoryModel) => {
      categoryModel.getCategory(Math.floor(Math.random() * 18000));
    });
  }
});

export default CategoriesCollection;
