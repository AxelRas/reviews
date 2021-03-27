import React from 'react';
import Reviews from './components/Reviews';
import reviewsData from './reviews.json';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Reviews data={reviewsData.reviews} />
      </div>
    );
  }
}

export default App;
