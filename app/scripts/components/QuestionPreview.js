import React from 'react';

import store from '../store';

const QuestionPreview = React.createClass({
  getInitialState: function() {
    return {
      wasViewed: this.props.wasViewed,
      answer: '',
    }
  },
  showModal: function() {
    this.props.showModal(this.props.clue, this.props.index);

  },
  componentWillReceiveProps: function(newProps) {
    this.setState({
      wasViewed: newProps.wasViewed,
      answer: newProps.answer,
    });
  },
  render: function() {
    // console.log(this.state);
    if (this.props.wasViewed && (this.props.answer === 'correct')) {
      return (<li className="q-previews wasViewed correct">${this.props.clue.value}</li>);
    } else if (this.props.wasViewed && (this.props.answer === 'wrong')) {
      return (<li className="q-previews wasViewed wrong">${this.props.clue.value}</li>);
    } else {
        return (
          <li className="q-previews" onClick={this.showModal}>
            ${this.props.clue.value}
          </li>
        );
    }
  }
});

export default QuestionPreview;
