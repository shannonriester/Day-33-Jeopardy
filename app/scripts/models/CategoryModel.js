import Backbone from 'backbone';
import $ from 'jquery';

const CategoryModel = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: `http://jservice.io/api/category?id=4`,
  defaults: {
    category: {},
    wasViewed: false,
    answeredCorrect: [],
    answeredWrong: [],
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
  wasViewed: function(clue) {
    this.set('wasViewed', true);
    // this.trigger('change');
  },
  answeredCorrect: function(clue) {
    this.wasViewed(clue);

    let correctArr = this.get('answeredCorrect');
    correctArr = correctArr.concat(clue.id)
    this.set('answeredCorrect', correctArr);
  },
  answeredWrong: function(clue) {
    this.wasViewed(clue);

    let wrongArr = this.get('answeredWrong');
    wrongArr = wrongArr.concat(clue.id);
    this.set('answeredWrong', wrongArr);
  },
});

export default CategoryModel;
