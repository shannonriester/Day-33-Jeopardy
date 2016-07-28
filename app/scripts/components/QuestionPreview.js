import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import $ from 'jquery';

import store from '../store';
import QuestionModal from './QuestionModal';

const QuestionPreview = React.createClass({
  showQuestion: function(){
    // <QuestionModal clues={this.props}/>
  },
  render: function(){

    console.log(this.props);
    return (
        <div className="column-container">
          <h3>{this.props.title}</h3>
          <div className="question-preview" onClick={this.showQuestion}>{questionPreview}</div>
        </div>
      );
    }
});

export default QuestionPreview;
