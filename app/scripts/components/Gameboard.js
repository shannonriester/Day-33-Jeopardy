import React from 'react';
import Backbone from 'backbone';
import $ from 'jquery';

import CategoryColumn from './CategoryColumn';
// import session from '../models/Session';
import store from '../store';

const Gamebaord = React.createClass({
  getInitialState: function(){
    return {
      categories: store.categories.toJSON(),
      score: 0
    }
  },
  componentDidMount: function(){
    store.categories.on('update change', () => {
      this.setState({categories: store.categories.toJSON()});
    });

    store.categories.makeNewGame();

    store.score.on('change', () => {
      console.log('SCORE CHANGED');
      this.setState({score : store.score.get('winnings')});
    });

  },
  render: function(){
    let categoriesArr = this.state.categories.map((catObj, i, arr) => {
      let index=i;
      return <CategoryColumn key={i} title={catObj.category.title} clues={catObj.category.clues} />;
      });
    return (
      <div id="game-container">
        <div className="gameboard">{categoriesArr}</div>
        <footer>${this.state.score}</footer>
      </div>
    );
  }
});

export default Gamebaord;
