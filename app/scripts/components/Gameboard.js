import React from 'react';
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
    // this.gameCategories();
    store.categories.fetch({
      success: (model, response) => {
        for (var i=0; i < 5; i++) {
          var cluesArr = response.clues[i];
          console.log(cluesArr);
          this.setState({categories:store.categories.toJSON()})
        };
      }
    });
    store.categories.on('change update', () => {
      this.setState({categories:store.categories.toJSON()})
    });
  },
  gameCategories: function(){
        //don't forget to change the id value in the url
    // for (var i = 1; i <= 6; i++) {
      // $.ajax({
      //   type: 'GET',
      //   url: `http://jservice.io/api/category?id=4`,
      //   success: (response) =>{
      //   let filterN = 200;
      //   let category = response;
      //   let cluesArr = category.clues.filter((clue, i, arr) => {
      //     if (clue.value === filterN) {
      //       filterN += 200;
      //       return clue;
      //     }
      //   });
      //   category.clues = cluesArr;
      //   let currentState = this.state.categories;
      //   currentState.push(category);
      //   this.setState({categories:currentState});
      //   }
      // });
    // };
  },
  render: function(){
    // if (!this.state.categories){
    //   console.log('not yet...');
    //   return null;
    // }
    let categoryArr = this.state.categories.map(function(catObj, i, arr){
      // let randomN = (Math.random());
        //replace the numbers in the forloop with randomN

        // var cluesArr = [catObj.clues[0],catObj.clues[1],catObj.clues[2],catObj.clues[3],catObj.clues[4]];
        // console.log(cluesArr);
        // return <h3 key={i} clues={this.state.categories.clues}></h3>;
    });
    // console.log(this.state.categories[0]);
    return (
      <div>hi</div>
    );
  }
});

export default Gamebaord;
