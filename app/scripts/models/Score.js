import Backbone from 'backbone';
import $ from 'jquery';

import store from '../store';
// import session from './Session';

const Score = Backbone.Model.extend({
  defaults: {
    answer: '',
    winnings: 0
  },
  correctAnswer: function(clue){
    console.log('RIGHT ON! CORRECT ANSWER');
    // clue.addClass('correctAnswer');

    let answer = clue.answer;
    let newScore = clue.value + this.get('winnings');

    this.set('winnings', newScore);
    this.set('answer', answer);

    this.trigger('change');
  },
  wrongAnswer: function(clue){
    console.log('WRONG ANSWER.');

    // $addClass('wrongAnswer');

    let answer = clue.answer;
    let newScore = this.get('winnings') - clue.value;

    this.set('winnings', newScore);
    this.set('answer', answer);

    this.trigger('change');
  }
});

export default Score;
