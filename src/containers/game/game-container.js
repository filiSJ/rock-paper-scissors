import React, { Component } from 'react';
import PlayerInfoComponent from '../../components/player-info/player-info-component';
import { playOptions } from '../../constants/play-options';
import GameResultsComponent from '../../components/game-results/game-results-component';

export default class GameContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: null,
      playerScore: 0,
      computerScore: 0,
      gamesPlayed: 0
    };
  }

  getComputerChoice() {
    const totalOptions = playOptions.length;
    const playIndex = Math.floor(Math.random() * totalOptions);

    return playOptions[playIndex].type;
  }

  isRock(type) {
    return type === 'rock';
  }

  isScissors(type) {
    return type === 'scissors';
  }

  isPaper(type) {
    return type === 'paper';
  }

  compare(playerChoice, opponentChoice) {
    let result;

    if (playerChoice === opponentChoice) {
      result = 0;
    } else if ((this.isRock(playerChoice) && this.isScissors(opponentChoice))
      || (this.isScissors(playerChoice) && this.isPaper(opponentChoice))
      || (this.isPaper(playerChoice) && this.isRock(opponentChoice))) {
        result = 1;
    } else {
      result = -1;
    }
    return result;
  }

  play = playerChoice => {
    const opponentChoice = this.getComputerChoice();

    const result = this.compare(playerChoice, opponentChoice);

    return this.updateResults(result, playerChoice, opponentChoice);
  }
  
  getWinner(matchResult) {
    if (matchResult === 1) {
      return 'Player 1';
    } else if (matchResult === -1) {
      return 'Computer';
    }

    return 'none';
  }

  updateResults(matchResult, playerChoice, opponentChoice) {
    this.setState(prevState => ({
      match: {
        winner: this.getWinner(matchResult),
        playerChoice,
        opponentChoice
      },
      playerScore: matchResult === 1 ? prevState.playerScore + 1 : prevState.playerScore,
      computerScore: matchResult === -1 ? prevState.computerScore + 1 : prevState.computerScore,
      gamesPlayed: prevState.gamesPlayed + 1
    }));
  }

  restart = () => {
    this.setState({
      match: null
    })
  }
  
  getWinnerImage(matchWinner) {
    if (matchWinner === 'Player 1') {
      return '/img/winner.png';
    } else if (matchWinner === 'none') {
      return '/img/tie.png';
    }
    
    return '/img/loser.png';
  }

  render() {
    const { match, playerScore, gamesPlayed, computerScore } = this.state;

    return (
      <div className="game-container">
        <div className="game-player-info">
          <PlayerInfoComponent
            playerChoice={match && match.playerChoice}
            matchWinner={match && match.winner}
            playerName="Player 1"
            playerImgUrl="/img/avatar.png"
            score={playerScore}
            play={this.play}
          />
        </div>
        { match &&
          <GameResultsComponent
            totalGamesPlayed={gamesPlayed}
            matchWinner={match.winner}
            newMatch={this.restart}
            winnerImg={this.getWinnerImage(match.winner)}
          />
        }
        <div className="game-player-opponent">        
          <PlayerInfoComponent
            playerChoice={match && match.opponentChoice}
            matchWinner={match && match.winner}
            playerName="Computer"
            playerImgUrl="/img/avatar2.png"
            score={computerScore}
            hideControls
          />
        </div>
      </div>
    );
  }
}
