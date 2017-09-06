import React from 'react';
import { shallow } from 'enzyme';
import PlayerMatchResultComponent from './player-match-result-component';

describe('Player match result component', () => {
  const props = {
    playerChoice: 'paper',
    playerName: 'Player'
  };

  it('should render the player choice', () => {
    const component = shallow(<PlayerMatchResultComponent {...props} />);
    expect(component.find('.player-match-result-choice').text()).toEqual('Player played: paper');
  });

  it('should render the correct image for the player choice', () => {
    const component = shallow(<PlayerMatchResultComponent {...props} />);
    expect(component.find('.player-match-result-img').prop('src')).toEqual('img/paper.png');
  });
});
