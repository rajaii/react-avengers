import React from 'react';
import logo from './logo.svg';
import './App.css';
import avengers_ from './avengers'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers_
    }
  }

  render() {
    return (
      <div>
        <h1>Avengers by Ali Rajaii</h1>
        <div>
          {this.state.avengers.map(item => {
            return <div key={item.name}>
              <p>Avenger: {item.name} Finishing move: {item.finishingMove}</p>
            </div>
          })}
        </div>
        
      </div>
    )
  }
}

export default App;
