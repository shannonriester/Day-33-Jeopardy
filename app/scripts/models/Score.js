import Backbone from 'backbone';

const Score = Backbone.Model.extend({
  defaults: {
    correct: 0,
    incorrect: 0,
    winnings: 0
  },
  wasViewed: function(item){
    console.log(item);
  },
  correctAnswer: function(clue){
    let newScore = clue.value + this.get('winnings');
    this.set('winnings', newScore);
    // this.trigger.('change');
    //make sure to listen to this happening
  },
  wrongAnswer: function(clue){

  }

});

export default Score;
