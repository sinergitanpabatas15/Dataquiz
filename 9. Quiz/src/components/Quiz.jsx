import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as data from '../data.json';
import { hot } from 'react-hot-loader';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      answer: [],
      totalQuestion: 10,
      list: data.default,
      next: 1,
    };
  }

  componentDidMount() {
    console.log(data.default[0]);
  }

  getAnswer = (e, answer) => {
    console.log(answer);
  };

  render() {
    return (
      <div>
        <h1>Quiz</h1>
        <div className="quiz__question">
          <p>Question: {this.state.list[this.state.id]['question']}</p>
        </div>
        <div className="quiz__answer">
          {this.state.list[this.state.id]['answer'].map((item, index) => {
            return (
              <button
                onClick={e => this.getAnswer(e, index)}
                className="quiz__answer--item"
                key={index}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

Quiz.propTypes = {
  id: PropTypes.number,
  answer: PropTypes.array,
  totalQuestion: PropTypes.number,
  list: PropTypes.object,
};

export default hot(module)(Quiz);
