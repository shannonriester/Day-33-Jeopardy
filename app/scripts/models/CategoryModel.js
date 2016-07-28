import Backbone from 'backbone';
import $ from 'jquery';

const CategoryModel = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: `http://jservice.io/api/category?id=4`,
  defaults: {
    category: {},
  },
  getCategory: function(categoryId){
    $.ajax({
      type: 'GET',
      url: `http://jservice.io/api/category?id=${categoryId}`,
      success: (response) =>{
      let filterN = 200;
      let category = response;
      let cluesArr = category.clues.filter((clue, i, arr) => {
        if (clue.value === filterN) {
          filterN += 200;
          return clue;
        }
      });
      category.clues = cluesArr;
      this.set('category', category);
      }
    });
  },
});

export default CategoryModel;
