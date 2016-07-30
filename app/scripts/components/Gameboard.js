import React from 'react';
import Backbone from 'backbone';
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
    store.categories.on('update change', () => {
      this.setState({categories: store.categories.toJSON()});
    });

    store.categories.makeNewGame();
  },
  render: function(){
    let categoriesArr = this.state.categories.map((catObj, i, arr) => {
      let index=i;
      console.log(index);
      console.log(catObj.category);
      // console.log(catObj.category.clues);
      return <CategoryColumn key={i} title={catObj.category.title} clues={catObj.category.clues} />;
      });
    return (
      <div id="game-container">
        <div className="gameboard">{categoriesArr}</div>
        <footer>$0</footer>
      </div>
    );
  }
});

export default Gamebaord;
