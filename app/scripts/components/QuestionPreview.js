import React from 'react';

import store from '../store';
import QuestionModal from './QuestionModal';

const QuestionPreview = React.createClass({
  getInitialState: function(){
    return {
      wasViewed:false,
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
  render: function(){
    if (this.state.wasViewed) {
      return (
        <li className="q-previews wasViewed correctAnswer wrongAnswer" ref="questionPreview">${this.props.clue.value}</li>
      );
    } else {
      return (
        <li className="q-previews" onClick={this.runShowModal} ref="questionPreview">${this.props.clue.value}</li>
      );
    }
  }
});

export default QuestionPreview;
