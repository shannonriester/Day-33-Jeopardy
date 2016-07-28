import Backbone from 'backbone';

import CategoryModel from '../models/CategoryModel';

const CategoriesCollection = Backbone.Collection.extend({
  model: CategoryModel,
  url: `http://jservice.io/api/category?id=4`
});

export default CategoriesCollection;
