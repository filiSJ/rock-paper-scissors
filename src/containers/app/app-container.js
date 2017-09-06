import React, { Component } from 'react';
import '../../styles/app.css';
import GameContainer from '../game/game-container';

export default class AppContainer extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Rock, Paper Scissors</h2>
        </div>
        <GameContainer />
      </div>
    );
  }
}
