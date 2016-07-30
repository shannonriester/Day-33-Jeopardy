import Backbone from 'backbone';

const Score = Backbone.Model.extend({
  defaults: {
    correct: 0,
    incorrect: 0,
    winnings: 0
  },
  correctAnswer: function(clue){
    let newScore = clue.value + this.get('winnings');
    this.set('winnings', newScore);
    this.trigger('change');
    // store.categories.trigger('change');
    //make sure to listen to this happening
  },
  wrongAnswer: function(clue){

  }
});

export default Score;
