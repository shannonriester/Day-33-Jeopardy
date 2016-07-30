import React from 'react';

import store from '../store';
import QuestionModal from './QuestionModal';

const QuestionPreview = React.createClass({
  getInitialState: function(){
    return {wasViewed:false};
  },
  componentDidMount: function(){
    store.categories.on('change', () => {
      this.setState({wasViewed: store.categories.get('wasViewed')})
    });
  },
  runShowModal: function() {
    this.props.showModal(this.props.clue);
    this.setState({wasViewed:true});
  },
  // removePreview: function(item){
  //   console.log('item ', item);
  //   // store.categories.wasViewed(item);
  //   console.log(this.props.clues);
  //   // console.log(store.categories.get(this.props.clues).get());
  //   // .get('item.props.clue.id').wasViewed;
  //
  //     // console.log(store.categories.get('item'));
  //   // console.log(store.categories.get());
  //   store.categories.trigger('change');
  //   // reach to store.categories and change a particular question to be 'wasViewed', and make sure that fires a change event so everything is updated (this.trigger('change'))
  // },
  render: function(){
    if (this.state.wasViewed) {
      return (
        <li className="q-previews wasViewed" ref="questionPreview">${this.props.clue.value}</li>
      );
    } else {
      return (
        <li className="q-previews" onClick={this.runShowModal} ref="questionPreview">${this.props.clue.value}</li>
      );
    }
    //ask if the clue has been viewed and return the right li based on that
  }
});

export default QuestionPreview;
