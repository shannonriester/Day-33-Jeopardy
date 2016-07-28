import React from 'react';
import $ from 'jquery';

import {Router, Route, hashHistory} from 'react-router';
import store from '../store';

const QuestionPreview = React.createClass({
  getInitialState(){
    return {showModal:false}
  },
  showQuestion: function(){
    this.setState({showModal:true});
  },
  render: function(){
    let modal;
    if (this.state.showModal) {
      // console.log(this);
      modal = (
        <div className="question-modal">

        </div>
      );
    }
      let cluesArr = store.categories.clues.map((clue, i, arr)=>{
        return <h3 key={i} onClick={this.showQuestion}>{`$`}{clue.value}</h3>
      });
    return (
      <div>
        {cluesArr}
      </div>
    );
  }
});

export default QuestionPreview;
