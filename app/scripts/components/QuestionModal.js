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
    // if (jeopardyAnswer.indexOf('<i>') !== -1) {
    //   let length = jeopardyAnswer.length;
    //   let sliceEnd = length - 4;
    //   jeopardyAnswer = jeopardyAnswer.slice(3, sliceEnd);
    //   filteredAnswer = jeopardyAnswer;
    // }
    // if (jeopardyAnswer.indexOf('"') !== -1) {
    //   let length = jeopardyAnswer.length;
    //   let sliceEnd = length - 1;
    //   jeopardyAnswer = jeopardyAnswer.slice(1, sliceEnd);
    //   filteredAnswer = jeopardyAnswer;
    // }

    jeopardyAnswer = jeopardyAnswer.replace('<i>','').replace('</i>','').replace('(','').replace(')','').replace('\\','');
    jeopardyAnswer = jeopardyAnswer.split(' ');
    let filteredAnswer;
    if (jeopardyAnswer.length > 1) {
      filteredAnswer = jeopardyAnswer.filter((word) => {
        if (word.length < 3 || word === 'the') {
          return false;
        } else {
          // console.log('filteredAnswer after removing small words', jeopardyAnswer);
          return true;
        }
      });
      if (jeopardyAnswer.length) {
        filteredAnswer = jeopardyAnswer.filter((word) => {
          if (userAnswer.search(word)!= -1) {
            // console.log('user answer was in jeopardyAnswer', jeopardyAnswer);
            return true;
          } else {
            return false;
          }
        });
      }
      console.log('jeopardyAnswer in if statement', jeopardyAnswer);
      // jeopardyAnswer = jeopardyAnswer.join(' ');
    }

    if (jeopardyAnswer.length) {
      console.log('jeopardyAnswer.length', jeopardyAnswer);
      jeopardyAnswer = jeopardyAnswer.join(' ');
    }
    console.log('jeopardyAnswer final', jeopardyAnswer);
    // console.log('userAnswer', userAnswer);
    if (userAnswer !== '' && userAnswer !== ' ' && jeopardyAnswer === userAnswer && filteredAnswer) {
      this.props.correctAnswer(this.props.clue);
    } else {
      this.props.wrongAnswer(this.props.clue);
    }
    this.props.hideModal();
  },
  passAnswer: function() {
    this.props.wrongAnswer(this.props.clue);
    this.props.hideModal();
  },
  render: function(){
    console.log(this.props.clue.answer);
    return (
      <div className="modal-container">
        <form className="modal question-modal" onSubmit={this.submitAnswer}>
          <h2>{this.props.clue.question}</h2>
          <input className="input-answer" type="text" placeholder="type in your answer..." ref="useranswer"/>
          <section className="modal-btn-container">
            <input className="submit-btn" type="submit" value="submit answer" onClick={this.submitAnswer} />
            <input className="pass-btn" type="button" value="pass" onClick={this.passAnswer} />
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
