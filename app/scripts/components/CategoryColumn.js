import React from 'react';

import QuestionPreview from './QuestionPreview';

const CategoryColumn = React.createClass({
  render: function(){
    let cluesObj = this.props.clues.map((clue,i) => {
      return <QuestionPreview key={i} clue={clue} />;
    });
    return (
      <div className="column-container">
        <h2>{this.props.title}</h2>
        <ul className="question-preview-container">{cluesObj}</ul>
      </div>
    );
  }
});

export default CategoryColumn;
