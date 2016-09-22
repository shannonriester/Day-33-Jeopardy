import React from 'react';
import $ from 'jquery';

import store from '../store';
import QuestionPreview from './QuestionPreview';
import QuestionModal from './QuestionModal';

const CategoryColumn = React.createClass({
  getInitialState: function(){
    return {
      showModal: false,
      clue: '',
      wasViewed: this.props.wasViewed,
      modalView: undefined,
      answer: ['unanswered', 'unanswered', 'unanswered', 'unanswered', 'unanswered'],
    }
  },
  showModal: function(clue, index) {
    this.setState({
      showModal: true,
      clue: clue,
      modalView: index,
    });
  },
  hideModal: function() {
    this.setState({showModal: false});
  },
  correctAnswer: function(clue) {
    store.score.correctAnswer(clue);
    let answer = this.state.answer;
    answer[this.state.modalView] = 'correct';
    this.setState({
      wasViewed: true,
      answer: answer,
    });
  },
  wrongAnswer: function(clue) {
    store.score.wrongAnswer(clue);
    let answer = this.state.answer;
    answer[this.state.modalView] = 'wrong';

    this.setState({
      wasViewed: true,
      answer: answer,
    });
  },
  render: function() {
    let questionModal;
    if (this.state.showModal) {
      questionModal = (<QuestionModal
        correctAnswer={this.correctAnswer}
        wrongAnswer={this.wrongAnswer}
        hideModal={this.hideModal}
        clue={this.state.clue} />);
    }

    if (!this.props.clues) {
      return null;
    }

    let questionPreviews = this.props.clues.map((clue, i) => {
      return (<QuestionPreview
        showModal={this.showModal}
        index={i}
        answer={this.state.answer[i]}
        wasViewed={this.state.wasViewed}
        key={i}
        clue={clue} />);
    });

    return (
      <div className="column-container">
        <h3>{this.props.title}</h3>
        <ul className="question-preview-container">{questionPreviews}</ul>
        {questionModal}
      </div>
    );
  }
});

export default CategoryColumn;
