import React from 'react';

import $ from 'jquery';
import store from '../store';

const QuestionModal = React.createClass({
  submitAnswer: function(e){
    e.preventDefault();
    let userAnswer = this.refs.useranswer.value.toLowerCase();
    let jeopardyAnswer = this.props.clue.answer.toLowerCase();
    if (userAnswer === this.props.clue.answer) {
      console.log('you got the answer right!');
      store.score.correctAnswer(this.props.clue);
    } else {
      console.log('wrong answer...');
      store.score.wrongAnswer(this.props.clue);
    }
    console.log('jeopardyAnswer ', jeopardyAnswer);
    console.log('userAnswer ', userAnswer);
    this.props.hideModal();
    this.props.removePreview(this);
    // this.props.removePreview(this.props.clue);
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
      </div>
    );
  }
});

export default QuestionModal;
