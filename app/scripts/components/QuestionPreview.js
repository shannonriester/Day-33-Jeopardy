import React from 'react';
// import {Router, Route, hashHistory} from 'react-router';

import store from '../store';
import QuestionModal from './QuestionModal';


const QuestionPreview = React.createClass({
  getInitialState: function(){
    return {showModal:false}
  },
  showModal: function(){
    console.log('show modal!');
    this.setState({showModal:true});
  },
  render: function(){
    let questionModal;
    if (this.state.showModal) {
      questionModal = <QuestionModal clue={this.props.clue}/>;
    }
    return (
      <li className="q-previews" onClick={this.showModal}>${this.props.clue.value}{questionModal}</li>
    );
  }
});

export default QuestionPreview;
