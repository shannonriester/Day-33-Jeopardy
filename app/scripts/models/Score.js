import Backbone from 'backbone';
import $ from 'jquery';

import store from '../store';

const Score = Backbone.Model.extend({
  defaults: {
    answer: '',
    winnings: 0,
    answeredWrong: [],
    answeredCorrect: [],
  },
  correctAnswer: function(clue) {
    console.log('RIGHT ON! CORRECT ANSWER');
    let answer = clue.answer;
    let newScore = clue.value + this.get('winnings');

    this.set('winnings', newScore);
    this.set('answer', answer);

    let correctArr = this.get('answeredCorrect');
    correctArr = correctArr.concat(clue.id)
    this.set('answeredCorrect', correctArr);
  },
  wrongAnswer: function(clue){
    console.log('WRONG ANSWER');
    let answer = clue.answer;
    let newScore = this.get('winnings') - clue.value;

    this.set('winnings', newScore);
    this.set('answer', answer);

    let wrongArr = this.get('answeredWrong');
    wrongArr = wrongArr.concat(clue.id);
    this.set('answeredWrong', wrongArr);
  }
});

export default Score;
