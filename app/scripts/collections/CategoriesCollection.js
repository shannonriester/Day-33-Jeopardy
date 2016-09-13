import Backbone from 'backbone';
import _ from 'underscore';


import CategoryModel from '../models/CategoryModel';

const CategoriesCollection = Backbone.Collection.extend({
  model: CategoryModel,
  url: `http://jservice.io/api/category?id=4`,
  makeNewGame: function(gameState) {
    this.reset();

    _(6).times(() => {
      this.add({});
    });

    this.each((categoryModel) => {
      categoryModel.getCategory(Math.floor(Math.random() * 18000));
    });
  },
  findModel: function(clue) {
    let categoryModel;
    this.models.forEach((model, i) => {
      model = model.toJSON();
      categoryModel = this.findWhere({id: model.category.id});
    });
    console.log(categoryModel);
  },
});

export default CategoriesCollection;
