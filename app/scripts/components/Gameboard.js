import React from 'react';
import Backbone from 'backbone';
import $ from 'jquery';

import QuestionPreview from './QuestionPreview';
import store from '../store';

const Gamebaord = React.createClass({
  getInitialState: function(){
    return {
      categories: store.categories.toJSON()
    }
  },
  componentWillMount: function(){},
  componentDidMount: function(){

    store.categories.add({});

    store.categories.on('update change', () => {
      this.setState({categories: store.categories.toJSON()});
    });

    store.categories.each((categoryModel) => {
      categoryModel.getCategory(Math.floor(Math.random() * 18000));
    });
  },
  render: function(){
    // if (!store.categories.models[0]){
    //   console.log('not yet...');
    //   return null;
    // }

    let questionPreviews = this.state.categories.map((catObj, i, arr) => {
      console.log(catObj);
      console.log(catObj.category.title);
      console.log(catObj.category.clues);
      return <QuestionPreview
                key={i}
                title={catObj.category.title}
                clues={catObj.category.clues} />;
      });
    return (
      <div>{questionPreviews}</div>
    );
  }
});

export default Gamebaord;
