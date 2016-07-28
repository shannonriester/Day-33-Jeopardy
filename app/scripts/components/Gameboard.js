import React from 'react';
import Backbone from 'backbone';
import $ from 'jquery';

import Category from './Category';
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
    // if (!this.state.categories){
    //   console.log('not yet...');
    //   return null;
    // }
    console.log(store.categories.models[0].get('title'));
    // let titles = this.state.categories.map(function(catObj, i, arr){
    //
    //     return <h3 key={i} clues={this.state.categories.clues}></h3>;
    // });
    return (
      <div>hi</div>
    );
  }
});

export default Gamebaord;
