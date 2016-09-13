import React from 'react';
import $ from 'jquery';

import store from '../store';
import QuestionPreview from './QuestionPreview';
import QuestionModal from './QuestionModal';

const CategoryColumn = React.createClass({
  getInitialState: function(){
    return {showModal : false};
  },
  showModal: function(clue){
    this.setState({
      showModal : true,
      clue : clue,
      correctAnswers: [],
      wrongAnswers: [],
    });
  },
  hideModal: function(){
    this.setState({showModal : false});
  },
  correctAnswer: function() {},
  wrongAnswer: function() {},
  render: function(){
    let questionModal;
    if (this.state.showModal) {
      questionModal = (<QuestionModal
        correctAnswer={this.correctAnswer}
        wrongAnswer={this.wrongAnswer}
        hideModal={this.hideModal}
        removePreview={this.removePreview}
        clue={this.state.clue}/>);
    }
    if (!this.props.clues) {
      return null;
    }

    let cluesObj = this.props.clues.map((clue,i) => {
      return (<QuestionPreview
        showModal={this.showModal}
        correctAnswer={this.correctAnswer}
        wrongAnswer={this.wrongAnswer}
        key={i}
        clue={clue} />);
    });

    return (
      <div className="column-container">
        <h3>{this.props.title}</h3>
        <ul className="question-preview-container">{cluesObj}</ul>
        {questionModal}
      </div>
    );
  }
});

export default CategoryColumn;
