import React from 'react';
import {Router, Route} from 'react-router';
import $ from 'jquery';

import {Router, Route, hashHistory} from 'react-router';
import store from '../store';

const QuestionModal = React.createClass({
  showQuestion: function(){
    router.push('/questionModal');
  },
  submitAnswer: function(){
    let userAnswer = $('.input-answer').val();
  },
  render: function(){
    return (
      <div className="modal-container">
        <div className="modal">
          <h3>{this.props.clues.question}</h3>
          <input className="input-answer" type="text" placeholder="type in your answer..." />
          <input className="submit-btn" type="submit" value="submit answer" onClick={this.submitAnswer}/>
        </div>
      </div>
    );
  }
});

export default QuestionModal;
