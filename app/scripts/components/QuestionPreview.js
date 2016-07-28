import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import $ from 'jquery';

import store from '../store';

const QuestionPreview = React.createClass({
  showQuestion: function(){
    console.log('show modal!');
    <QuestionModal />;
  },
  render: function(){
    // console.log(this.props);
    return (
        <div className="column-container">
          <h3>{this.props.title}</h3>
          <div className="question-preview">{}</div>
        </div>
      );
    }
});

export default QuestionPreview;
