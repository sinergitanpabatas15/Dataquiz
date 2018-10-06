import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import * as data from '../data.json';
import Header from './Header';
import Result from './Result';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      answer: [],
      totalQuestion: data.default.length,
      list: data.default,
      next: 1,
      finish: false,
    };
  }

  getAnswer = (e, answer) => {
    this.setState({
      answer: [
        ...this.state.answer,
        answer === this.state.list[this.state.id].final,
      ],
      id: this.state.next,
      next: this.state.next + 1,
      finish: this.state.next + 1 > this.state.totalQuestion,
    });
  };

  render() {
    return !this.state.finish ? (
      <React.Fragment>
        <Header />
        <section className="quiz">
          <div className="quiz__image">
            <img
              src={`../../assets/q${
                this.state.id + 1 < 10
                  ? '0' + (this.state.id + 1)
                  : this.state.id + 1
              }.jpg`}
              alt=""
            />
          </div>
          <div className="quiz__wrapper">
            <div className="quiz__question">
              <h2>{this.state.list[this.state.id]['question']}</h2>
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
        </section>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Header />
        <Result
          answer={this.state.answer.filter(item => item === true).length}
          totalQuestion={this.state.totalQuestion}
        />
      </React.Fragment>
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
