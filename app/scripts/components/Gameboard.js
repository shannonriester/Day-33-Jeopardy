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
    for (i=0; i<7; i++) {
      store.categories.add({});
    }
    store.categories.each(function(categoryModel){
      categoryModel.getCategory(Math.floor(Math.random() * 18000));
    });
    console.log(store.categories);
  },
  // gameCategories: function(){
    // for (var i = 1; i <= 6; i++) {
    //   $.ajax({
    //     type: 'GET',
    //     url: `http://jservice.io/api/category?id=${id}`,
    //     success: (response) =>{
    //     let filterN = 200;
    //     let category = response;
    //     let cluesArr = category.clues.filter((clue, i, arr) => {
    //       if (clue.value === filterN) {
    //         filterN += 200;
    //         return clue;
    //       }
    //     });
    //     category.clues = cluesArr;
    //     let currentState = this.state.categories;
    //     currentState.push(category);
    //     this.setState({categories:currentState});
    //     }
    //   });
    // };
  // },
  render: function(){
    if (!this.state.categories){
      console.log('not yet...');
      return null;
    }
    // let categoryArr = this.state.categories.map(function(catObj, i, arr){
    //   // let randomN = (Math.random());
    //     //replace the numbers in the forloop with randomN
    //     return <h3 key={i} clues={this.state.categories.clues}></h3>;
    // });
    // console.log(categoryArr);
    return (
      <div>hi</div>
    );
  }
});

export default Gamebaord;
