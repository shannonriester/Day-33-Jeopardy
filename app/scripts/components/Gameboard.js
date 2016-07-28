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
    $.ajax({
      type: 'GET',
      url: `http://jservice.io/api/category?id=1`,
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
  },
  render: function(){
    console.log('state ', this.state);
    let categoryTitle = this.state.categories.title;
    return (
      <div>
        {categoryTitle}
        <Category clues={this.state.categories.clues}/>
      </div>
    );
  }
});

export default Gamebaord;
