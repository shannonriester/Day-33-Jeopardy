import Backbone from 'backbone';

import store from '../store';
// import session from './Session';

const Score = Backbone.Model.extend({
  defaults: {
    answer: '',
    winnings: 0
  },
  correctAnswer: function(clue){
    console.log('RIGHT ON! CORRECT ANSWER');

    let answer = clue.answer;
    let newScore = clue.value + this.get('winnings');

    this.set('winnings', newScore);
    this.set('answer', answer);

    this.trigger('change');
  },
  wrongAnswer: function(clue){
    console.log('WRONG ANSWER.');
    let answer = clue.answer;
    let newScore = this.get('winnings') - clue.value;

    this.set('winnings', newScore);
    this.set('answer', answer);

    this.trigger('change');
  }
});

export default Score;
