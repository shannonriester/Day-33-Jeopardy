import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import Gameboard from './Gameboard';
import Header from './Header';

const App = React.createClass({

  render: function(){
    return (
      <div>
        <Header/>
       {this.props.children}
      </div>
    );
  }
});

export default App;
