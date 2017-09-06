import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import GameResultsComponent from './game-results-component';

describe('Game Results component', () => {
  let props;

  beforeEach(() => {
    props = {
      matchWinner: 'Player',
      newMatch: () => '',
      winnerImg: 'img'
    };
  });
 
  it('should properly set the winner text when it is a tie', () => {
    const component = shallow(<GameResultsComponent {...props} matchWinner={'none'} />);
    expect(component.find('.game-results-winner-text').text()).toEqual('No one won!');
  });

  it('should set the winner text with match winnerwhen it is not a tie', () => {
    const component = shallow(<GameResultsComponent {...props} />);
    expect(component.find('.game-results-winner-text').text()).toEqual('Player won!');
  });

  it('should restart game when new match button is clicked', () => {
    const newMatchSpy = sinon.spy();

    const component = shallow(<GameResultsComponent {...props} newMatch={newMatchSpy} />);
    component.find('.game-results-restart-button').simulate('click');
    expect(newMatchSpy.callCount).toEqual(1);
  });
});
