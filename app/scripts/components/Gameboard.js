import React from 'react';
import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import CategoryColumn from './CategoryColumn';
import store from '../store';

const Gamebaord = React.createClass({
  getInitialState: function(){
    return {
      categories: store.categories.toJSON()
    }
  },
  componentDidMount: function(){
    store.categories.add({});
    // store.categories.add({});
    // store.categories.add({});
    // store.categories.add({});
    // store.categories.add({});
    // store.categories.add({});

    store.categories.on('update change', () => {
      this.setState({categories: store.categories.toJSON()});
    });

    store.categories.each((categoryModel) => {
      categoryModel.getCategory(Math.floor(Math.random() * 18000));
    });
  },
  render: function(){
    let categoriesArr = this.state.categories.map((catObj, i, arr) => {
      // console.log(catObj.category.title);
      // console.log(catObj.category.clues);
      return <CategoryColumn key={i} title={catObj.category.title} clues={catObj.category.clues} />;
      });
    return (
      <div className="gamebaord">{categoriesArr}</div>
    );
  }
});

export default Gamebaord;
