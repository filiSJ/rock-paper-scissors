import React from 'react';
import PropTypes from 'prop-types';

function getWinnerText(matchWinner) {
  if (matchWinner === 'none') {
    return 'No one won!';
  }
  return `${matchWinner} won!`;
}

export default function GameResultsComponent({ totalGamesPlayed, newMatch, matchWinner, winnerImg}) {
  return (
    <div className="game-results-component">
      <span className="game-results-winner-text">{ getWinnerText(matchWinner) }</span>
      <span className="game-results-text">Games played: { totalGamesPlayed }</span>
      <img src={winnerImg} className="game-results-img" />
      <button className="game-results-restart-button" onClick={newMatch}>Play again</button>
    </div>
  );
}

GameResultsComponent.propTypes = {
  matchWinner: PropTypes.string.isRequired,
  newMatch: PropTypes.func.isRequired,
  gamesPlayed: PropTypes.number,
  totalGamesPlayed: PropTypes.number,
  winnerImg: PropTypes.string.isRequired
}

