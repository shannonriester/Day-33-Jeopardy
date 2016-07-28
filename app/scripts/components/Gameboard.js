import React from 'react';
import $ from 'jquery';

import Category from './Category';

const Gamebaord = React.createClass({
  getInitialState: function(){
    return {
      categories: []
    }
  },
  componentWillMount: function(){},
  componentDidMount: function(){
    this.gameCategories();
  },
  gameCategories: function(){
    for (var i = 1; i <= 6; i++) {
      $.ajax({
        type: 'GET',
        url: `http://jservice.io/api/category?id=${i}`,
        success: (response) =>{
        let filterN = 200;
        let category = response;
        let cluesArr = category.clues.filter((clue, i, arr) => {
          if (clue.value === filterN) {
            filterN += 200;
            return clue;
          }
        });
        category.clues = cluesArr;
        let currentState = this.state.categories;
        currentState.push(category);
        this.setState({categories:currentState});
        }
      });
    };
  },
  render: function(){
    if (!this.state.categories){
      console.log('not yet...');
      return null;
    }
    let categoryArr = this.state.categories.map(function(catObj, i, arr){
      // console.log(catObj.title);
      return <h2>{catObj.title}<h2>;
    });
    // console.log(this.state.categories[0]);
    return (
      <div>{categoryArr}</div>
    );
  }
});

export default Gamebaord;
