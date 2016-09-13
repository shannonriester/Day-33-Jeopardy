import React from 'react';

import $ from 'jquery';
import store from '../store';

const QuestionModal = React.createClass({
  submitAnswer: function(e){
    e.preventDefault();

    let userAnswer = this.refs.useranswer.value;
    userAnswer = userAnswer.toLowerCase();
    let jeopardyAnswer = this.props.clue.answer;
    jeopardyAnswer = jeopardyAnswer.toLowerCase();
      if (jeopardyAnswer.indexOf('<i>') !== -1) {
        let length = jeopardyAnswer.length;
        let sliceEnd = length - 4;
        jeopardyAnswer = jeopardyAnswer.slice(3, sliceEnd);
        console.log(jeopardyAnswer);
      }

    if (userAnswer === jeopardyAnswer) {
      this.props.correctAnswer(this.props.clue);
    } else {
      this.props.wrongAnswer(this.props.clue);
    }
    console.log('jeopardyAnswer ', jeopardyAnswer);
    console.log('userAnswer ', userAnswer);
    this.props.hideModal();
  },
  render: function(){
    console.log(this.props.clue.answer);
    return (
      <div className="modal-container">
        <form className="modal question-modal" onSubmit={this.submitAnswer}>
          <h2>{this.props.clue.question}</h2>
          <textarea className="input-answer" type="text" placeholder="type in your answer..." ref="useranswer"></textarea>
          <section className="modal-btn-container">
            <input className="submit-btn" type="submit" value="submit answer" onClick={this.submitAnswer} />
            <input className="pass-btn" type="button" value="pass" onClick={this.submitAnswer} />
          </section>
        </form>
        <div className="answer-reveal">
          {this.props.clue.answer}
        </div>
      </div>
    );
  }
});

export default QuestionModal;
