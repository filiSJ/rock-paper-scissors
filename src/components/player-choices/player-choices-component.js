import React from 'react';
import PropTypes from 'prop-types';
import { playOptions } from '../../constants/play-options';

function renderOption(option, play) {
  return (
    <div className="player-choice" key={option.type} onClick={() => play(option.type)}>
      <img src={option.img} className="player-choice-image" alt={option.type} />
    </div>
  );
}

export default function PlayerChoicesComponent({ play }) {
  return (
    <div className="player-choices-component">
      <span className="player-choices-title">Pick your move:</span>
      <div>
        { playOptions.map(option => renderOption(option, play)) }
      </div>
    </div>
  );
}

PlayerChoicesComponent.propTypes = {
  play: PropTypes.func.isRequired
}
