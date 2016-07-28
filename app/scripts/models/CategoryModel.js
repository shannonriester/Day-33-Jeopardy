import Backbone from 'backbone';

const CategoryModel = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: `http://jservice.io/api/category?id=4`,
});

export default CategoryModel;
