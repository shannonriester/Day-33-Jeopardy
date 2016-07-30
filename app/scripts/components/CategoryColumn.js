import React from 'react';
import $ from 'jquery';

import store from '../store';
import QuestionPreview from './QuestionPreview';
import QuestionModal from './QuestionModal';

const CategoryColumn = React.createClass({
  getInitialState: function(){
    return {showModal : false}
  },
  showModal: function(clue){
    this.setState({
      showModal : true,
      clue : clue
    });
  },
  hideModal: function(){
    this.setState({showModal : false});
  },
  removePreview: function(item){
    console.log('item ', item);
    // store.categories.wasViewed(item);
    console.log(store.categories.get(this));
    store.categories.trigger('change');
    // reach to store.categories and change a particular question to be 'wasViewed', and make sure that fires a change event so everything is updated (this.trigger('change'))
  },
  render: function(){
    let questionModal;
    if (this.state.showModal) {
      questionModal = <QuestionModal hideModal={this.hideModal} removePreview={this.removePreview} clue={this.state.clue}/>;
    }
    if (!this.props.clues) {
      return null;
    }
    let cluesObj = this.props.clues.map((clue,i) => {
      return (<QuestionPreview showModal={this.showModal} key={i} clue={clue} />);
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
