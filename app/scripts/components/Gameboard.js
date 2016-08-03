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
      score: 0,
      answer: ''
    }
  },
  componentDidMount: function(){
    store.categories.on('update change', () => {
      this.setState({categories: store.categories.toJSON()});

      //reset the answer section when you make a new game
      if (this.state.answer !== '') {
        this.setState({answer: ''});
      }
    });

      store.categories.makeNewGame();



    store.score.on('change', () => {
      this.setState({score : store.score.get('winnings')});
      this.setState({answer : store.score.get('answer')})
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
        <footer>
          <div className="game-score">${this.state.score}</div>
          <div className="game-answer">"{this.state.answer}"</div>
        </footer>
      </div>
    );
  }
});

export default Gamebaord;
