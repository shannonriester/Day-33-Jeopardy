import React from 'react';

import store from '../store';
import QuestionModal from './QuestionModal';

const QuestionPreview = React.createClass({
  getInitialState: function(){
    return {
      wasViewed: false,
      answeredCorrect: null,
      answeredWrong: null,
    };
  },
  componentDidMount: function(){
    store.categories.on('change', () => {
      this.setState({wasViewed: store.categories.get('wasViewed')});
    });
  },
  runShowModal: function() {
    this.props.showModal(this.props.clue);
    this.setState({wasViewed:true});
  },
  answeredCorrect: function() {
    this.setState({wasViewed:true});
  },
  answeredWrong: function() {
    this.setState({wasViewed:true});
  },
  render: function(){
    if (this.state.wasViewed && this.state.answeredCorrect) {
      return (
        <li className="q-previews wasViewed answeredCorrect" ref="questionPreview">${this.props.clue.value}</li>
      );
    } else if (this.state.wasViewed && this.state.answeredWrong) {
      return (
        <li className="q-previews wasViewed answeredWrong" ref="questionPreview">${this.props.clue.value}</li>
      );
    } else {
        return (
          <li
            className="q-previews"
            onClick={this.runShowModal}
            answeredCorrect={this.answeredCorrect}
            answeredWrong={this.answeredWrong}
            ref="questionPreview">${this.props.clue.value}
          </li>
        );
    }
  }
});

export default QuestionPreview;
