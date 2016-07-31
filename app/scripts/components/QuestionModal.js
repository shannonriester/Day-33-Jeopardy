import React from 'react';

import $ from 'jquery';
import store from '../store';

const QuestionModal = React.createClass({
  // timeoutDelay: function(){
  //   window.setTimeout(submitAnswer(),2000);
  // },
  submitAnswer: function(e){
    e.preventDefault();

    let userAnswer = this.refs.useranswer.value;
      userAnswer.toLowerCase().trim();
    let jeopardyAnswer = this.props.clue.answer;
      jeopardyAnswer.toLowerCase().trim();

    if (userAnswer == this.props.clue.answer) {
      store.score.correctAnswer(this.props.clue);
    } else {
      store.score.wrongAnswer(this.props.clue);
    }

    console.log('jeopardyAnswer ', jeopardyAnswer);
    console.log('userAnswer ', userAnswer);

    // window.setTimeout(this.props.hideModal(), 2000);
    this.props.hideModal();

  },
  render: function(){
    console.log('ANSWER ', this.props.clue.answer);
    return (
      <div className="modal-container">
        <form className="modal" onSubmit={this.submitAnswer}>
          <h2>{this.props.clue.question}</h2>
          <input className="input-answer" type="text" placeholder="type in your answer..." ref="useranswer"/>
          <input className="submit-btn" type="submit" value="submit answer" onClick={this.submitAnswer} />
          <input className="pass-btn" type="button" value="pass" onClick={this.submitAnswer} />
        </form>
        <div className="answer-reveal">
          {this.props.clue.answer}
        </div>
      </div>
    );
  }
});

export default QuestionModal;
