import React from 'react';

const CategoryColumn = React.createClass({
  getInitialState: function(){
    let questionPreview = this.props.clues.map((clueObj, i) => {
      return clueObj;
      console.log('clueObj ', clueObj);
    });
  },
  showQuestion: function(){
    console.log('show modal!');
    <QuestionModal clues={this.props.clues}/>;
  },
  render: function(){
    console.log('this.state ', this.state);
    return (
      <div className="column-container">
        <h3>{this.props.title}</h3>
        <div className="question-preview" onClick={this.showQuestion}>{questionPreview}</div>
      </div>
    );
  }
});

export default CategoryColumn;
