import React from 'react';

import store from '../store';
import QuestionModal from './QuestionModal';

const QuestionPreview = React.createClass({
  runShowModal: function() {
    this.props.showModal(this.props.clue);
  },
  render: function(){
    if ()
    // ask if the clue has been viewed and return the right li based on that
    return (
      <li className="q-previews" onClick={this.runShowModal} ref="questionPreview">${this.props.clue.value}</li>
    );
  }
});

export default QuestionPreview;
