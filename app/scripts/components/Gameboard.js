import React from 'react';
import Backbone from 'backbone';
import $ from 'jquery';

import store from '../store';
import Header from './Header';
import CategoryColumn from './CategoryColumn';

const Gamebaord = React.createClass({
  getInitialState: function(){
    return {
      categories: store.categories.toJSON(),
      score: 0,
      answer: '',
    }
  },
  componentDidMount: function(){
    store.categories.on('change', () => {
      this.setState({categories: store.categories.toJSON()});
      //reset the answer section when you make a new game
      if (this.state.answer !== '') {
        this.setState({answer: ''});
      }
    });

    store.categories.makeNewGame();

    store.score.on('change', () => {
      this.setState({score : store.score.get('winnings')});
      this.setState({answer : store.score.get('answer')});
    });

  },
  render: function(){
    let score;
    if (this.state.score > 0) {
      score = '#4BF973';
    } else if (this.state.score < 0) {
      score = '#D81912';
    }

    let categoriesArr = this.state.categories.map((catObj, i, arr) => {
      let index=i;
      return (<CategoryColumn key={i} title={catObj.category.title} clues={catObj.category.clues} />);
      });

      let currAnswer;

      if (this.state.answer.indexOf('<i>') !== -1) {
        let length = this.state.answer.length;
        let sliceEnd = length - 4;
        this.state.answer = this.state.answer.slice(3, sliceEnd);
        // currAnswer = this.state.answer;
      }
      if (this.state.answer.indexOf('"') !== -1) {
        let length = this.state.answer.length;
        let sliceEnd = length - 1;
        this.state.answer = this.state.answer.slice(1, sliceEnd);
        // currAnswer = this.state.answer;
      }
    return (
      <div id="gameboard-component">
        <Header score={this.state.score} color={score}/>

        <div className="game-container">
          <div className="gameboard">{categoriesArr}</div>
          <footer>
            <p className="game-answer">{this.state.answer}</p>
          </footer>
        </div>
      </div>
    );
  }
});

export default Gamebaord;
