import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import LazyLoad from 'react-lazyload';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
      animate: true,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      this.setState({
        animate: true,
      });
    }
  }

  triggerAnimation = bool => {
    this.setState({
      animate: bool,
    });
  };

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

    window.scroll(0, 0);
  };

  render() {
    return !this.state.finish ? (
      <React.Fragment>
        <Header />
        <section className="quiz">
          <div className="quiz__image">
            <LazyLoad height={500}>
              <img
                src={`./assets/q${
                  this.state.id + 1 < 10
                    ? '0' + (this.state.id + 1)
                    : this.state.id + 1
                }.jpg`}
                alt=""
                className={this.state.animate ? 'fade-in' : ''}
              />
            </LazyLoad>
          </div>
          <div className="quiz__wrapper">
            <div className="quiz__question">
              <h2>{this.state.list[this.state.id]['question']}</h2>
            </div>
            {/* <div className="quiz__answer"> */}
            <TransitionGroup className="quiz__answer">
              {this.state.list[this.state.id]['answer'].map((item, index) => {
                const delay = Math.max(0, index * 100);
                return (
                  <CSSTransition
                    key={'a' + this.state.id + ' ' + item}
                    timeout={400}
                    classNames="fade"
                    unmountOnExit
                    onExited={() => {
                      this.triggerAnimation(false);
                    }}
                  >
                    <button
                      onClick={e => this.getAnswer(e, index)}
                      key={'a' + this.state.id + ' ' + item}
                      className="quiz__answer--item"
                      style={{ transitionDelay: `${delay}ms` }}
                    >
                      {item}
                    </button>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
            {/* </div> */}
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
