import React from 'react';
import Reviews from './components/Reviews';
import data from './reviews.json';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentReview: 0
    }

    this.nextReview = this.nextReview.bind(this);
    this.previousReview = this.previousReview.bind(this);
    this.randomReview = this.randomReview.bind(this);
  }

  nextReview() {
      if(this.state.currentReview == data.reviews.length -1) {
        this.setState({
          currentReview: 0
        });
      } else {
          this.setState({
            currentReview: ++this.state.currentReview
          });
      }
  }

  previousReview() {
    if(this.state.currentReview == 0) {
      this.setState({
        currentReview: data.reviews.length -1
      });
    } else {
      this.setState({
        currentReview: --this.state.currentReview
      });
    }
  }

  randomReview() {
    this.setState({
      currentReview: 0
    });
  }

  render() {
    return (
      <div className="App">
        <div className="page-title">
          <h1>Our Reviews</h1>
        </div>
        <Reviews data={data.reviews} current={this.state.currentReview} next={this.nextReview} previous={this.previousReview} random={this.randomReview} />
      </div>
    );
  }
}

export default App;
