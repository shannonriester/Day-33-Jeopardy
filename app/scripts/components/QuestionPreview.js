import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import $ from 'jquery';

import store from '../store';

const QuestionPreview = React.createClass({
  showQuestion: function(){
    <QuestionModal props={this.category}/>
    // router.push('/questionModal');
  },
  render: function(){
    return (
        <div className="question-preview">
          <h3>{this.props.clues.value}</h3>
          <input className="input-answer" type="text" placeholder="type in your answer..." />
          <input className="submit-btn" type="submit" value="submit answer" onClick={this.submitAnswer}/>
        </div>
      );
    }
});

export default QuestionPreview;
