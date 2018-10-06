import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Result extends Component {
  constructor(props) {
    super(props);
  }
  share = media => {
    console.log(media);
    const text = `I have finished this food quiz and get ${
      this.props.answer
    } out of ${this.props.totalQuestion}!`;
    const url = window.location.href;
    console.log(encodeURIComponent(text));
    switch (media) {
      case 'twitter':
        window.open(
          `http://twitter.com/share?text=${encodeURIComponent(
            text
          )}&url=${encodeURIComponent(url)}&hashtags=quiz,food`
        );
        break;
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}&t=${encodeURIComponent(text)}`
        );
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <React.Fragment>
        <section className="result">
          <h1>Your Results</h1>
          <p>
            Score: {this.props.answer} / {this.props.totalQuestion}
          </p>

          <button
            className="result__button result__button--twitter"
            onClick={() => this.share('twitter')}
          >
            Share in Twitter
          </button>
          <button
            className="result__button result__button--facebook"
            onClick={() => this.share('facebook')}
          >
            Share in Facebook
          </button>
        </section>
      </React.Fragment>
    );
  }
}

Result.propTypes = {
  answer: PropTypes.number,
  totalQuestion: PropTypes.number,
};

export default Result;
