import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

const App = React.createClass({

  render: function(){
    return (
      <div>
       {this.props.children}
      </div>
    );
  }
});

export default App;
