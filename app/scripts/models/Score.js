import Backbone from 'backbone';

import store from '../store';
// import session from './Session';

const Score = Backbone.Model.extend({
  defaults: {
    correct: 0,
    incorrect: 0,
    winnings: 0
  },
  correctAnswer: function(clue){
    console.log(this);
    let newScore = clue.value + this.get('winnings');
    console.log(newScore);
    this.set('winnings', newScore);
    this.trigger('change');
    // store.categories.trigger('change');
    //make sure to listen to this happening
  },
  wrongAnswer: function(clue){
    // console.log('WRONG ANSWER. THE ANSWER IS: ', this.props.clue.answer);
    let newScore = this.get('winnings') - clue.value;
    this.set('winnings', newScore);
    this.trigger('change');
  }
});

export default Score;
