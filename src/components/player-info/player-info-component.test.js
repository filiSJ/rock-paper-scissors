import React from 'react';
import { shallow } from 'enzyme';
import PlayerInfoComponent from './player-info-component';

describe('Player info component', () => {
  const props = {
    playerName: 'player 1',
    play: () => ''
  };

  it('should render the player choices component when it is not the end of the match and hide controls is false', () => {
    const component = shallow(<PlayerInfoComponent {...props} />);
    expect(component.find('PlayerChoicesComponent')).toHaveLength(1);
  });

  it('should not render the player choices component when it the end of the match', () => {
    const component = shallow(<PlayerInfoComponent {...props} matchWinner={'player 1'} />);
    expect(component.find('PlayerChoicesComponent')).toHaveLength(0);
  });

  it('should render the player waiting spinner if it is not the end of the match and controls are hidden', () => {
    const component = shallow(<PlayerInfoComponent {...props} hideControls />);
    expect(component.find('.player-info-waiting-spinner')).toHaveLength(1);
  });

  it('should not render the player choices component when hide controls is true', () => {
    const component = shallow(<PlayerInfoComponent {...props} hideControls/>);
    expect(component.find('PlayerChoicesComponent')).toHaveLength(0);
  });

  it('should render the player match results component when it is the end of the match', () => {
    const component = shallow(<PlayerInfoComponent {...props} matchWinner={'player 1'} />);
    expect(component.find('PlayerMatchResultComponent')).toHaveLength(1);
  });

  it('should not render the player match results component when it is not the end of the match', () => {
    const component = shallow(<PlayerInfoComponent {...props} />);
    expect(component.find('PlayerMatchResultComponent')).toHaveLength(0);
  });
});
