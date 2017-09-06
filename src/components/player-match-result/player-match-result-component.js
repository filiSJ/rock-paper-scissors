import React from 'react';
import PropTypes from 'prop-types';
import { playOptions } from '../../constants/play-options';

function mapChoiceToImage(playerChoice) {
  return playOptions.find(choice => choice.type === playerChoice);
}

export default function PlayerMatchResultComponent({ playerChoice, playerName }) {
  const choiceImg = mapChoiceToImage(playerChoice).img;

  return (
    <div className="player-match-result-component">
      <span className="player-match-result-choice">{`${playerName} played: ${playerChoice}`}</span>
      <img src={choiceImg} className="player-match-result-img" />
    </div>
  );
}

PlayerMatchResultComponent.propTypes = {
  playerName: PropTypes.string.isRequired,
  playerChoice: PropTypes.string
}
