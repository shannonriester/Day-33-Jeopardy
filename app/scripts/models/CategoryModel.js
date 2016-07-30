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
        if (cluesArr.length === 5) {
          category.clues = cluesArr;
          this.set('category', category);
        } else {
          this.getCategory(Math.floor(Math.random() * 18000));
        }
      }
    });
  },
  wasViewed: function(item){
    // console.log(item.props.clue);
    // let viewdArr = [];
    // this.set({'wasViewed', true});
    console.log('you\'re running the wasViewed() function!');
    item.trigger('change');
  },
});

export default CategoryModel;
