import React from 'react';
import PropTypes from 'prop-types';
import PlayerChoicesComponent from '../player-choices/player-choices-component';
import PlayerMatchResultComponent from '../player-match-result/player-match-result-component';

function renderPlayerChoices(matchWinner, hideControls, play) {
  if (matchWinner) {
    return null;
  } else if (hideControls) {
    return (
      <img className="player-info-waiting-spinner" src="img/spinner.gif" />
    );
  }
  return (
    <PlayerChoicesComponent
      play={play}
    />
  );
}

export default function PlayerInfoComponent({ hideControls, matchWinner, playerName, playerImgUrl, playerChoice, play, score }) {
  return (
    <div className="player-info-component">
        <h2 className="player-info-title">{playerName}</h2>
        <img src={playerImgUrl} className="player-avatar" alt="profile"/>
        <span className="player-info-score">Player score: {score}</span>
        { renderPlayerChoices(matchWinner, hideControls, play) }
        { matchWinner &&
          <PlayerMatchResultComponent
            matchWinner={matchWinner}
            playerName={playerName}
            playerChoice={playerChoice}
          />
        }
    </div>
  );
}

PlayerInfoComponent.propTypes = {
  hideControls: PropTypes.bool,
  matchWinner: PropTypes.string,
  playerName: PropTypes.string.isRequired,
  playerChoice: PropTypes.string,
  play: PropTypes.func,
  playerImgUrl: PropTypes.string,
  score: PropTypes.number
}
