import React from 'react';
import { shallow } from 'enzyme';
import GameContainer from './game-container';

describe('Game container', () => {
  let props;
  let mockMath;
  let globalMath;

  beforeEach(() => {
    globalMath = global.Math;
    mockMath = Object.create(global.Math);

    props = {
      playerName: 'player 1',
      play: () => ''
    };
  });

  afterEach(() => {
    global.Math = globalMath;
  });

  it('should render the game results component if the match has finished', () => {
    const container = shallow(<GameContainer />);
    container.instance().updateResults(1, 'rock', 'rock');
    
    expect(container.find('GameResultsComponent')).toHaveLength(1);
  });

  it('should not render the game results component if the match has not finished', () => {
    const container = shallow(<GameContainer />);
    
    expect(container.find('GameResultsComponent')).toHaveLength(0);
  });

  it('should update results and set a tie when both players have the same choice', () => {
    mockMath.random = () => 0.5;
    global.Math = mockMath;

    const container = shallow(<GameContainer />);
    const play = container.find('PlayerInfoComponent').at(0).prop('play');
    play('paper');

    const playerInfoProps = container.find('PlayerInfoComponent').at(0).props();
    expect(playerInfoProps.matchWinner).toEqual('none');
    expect(playerInfoProps.score).toEqual(0);
    expect(playerInfoProps.playerChoice).toEqual('paper');
    expect(container.find('GameResultsComponent').prop('totalGamesPlayed')).toEqual(1);
    expect(container.find('PlayerInfoComponent').at(1).prop('score')).toEqual(0);
    
  });

  it('should correctly set player as winner', () => {
    mockMath.random = () => 0.5;
    global.Math = mockMath;

    const container = shallow(<GameContainer />);
    const play = container.find('PlayerInfoComponent').at(0).prop('play');
    play('scissors');

    const playerInfoProps = container.find('PlayerInfoComponent').at(0).props();
    expect(playerInfoProps.matchWinner).toEqual('Player 1');
    expect(playerInfoProps.score).toEqual(1);
    expect(playerInfoProps.playerChoice).toEqual('scissors');
    expect(container.find('PlayerInfoComponent').at(1).prop('score')).toEqual(0);    
  });

  it('should correctly set computer as winner', () => {
    mockMath.random = () => 0.5;
    global.Math = mockMath;

    const container = shallow(<GameContainer />);
    const play = container.find('PlayerInfoComponent').at(0).prop('play');
    play('rock');

    const playerInfoProps = container.find('PlayerInfoComponent').at(1).props();
    expect(playerInfoProps.matchWinner).toEqual('Computer');
    expect(playerInfoProps.score).toEqual(1);
    expect(playerInfoProps.playerChoice).toEqual('paper');
    expect(container.find('PlayerInfoComponent').at(0).prop('score')).toEqual(0);
  });

  it('should set winner image when player wins', () => {
    const container = shallow(<GameContainer />);
    container.instance().updateResults(1);

    expect(container.find('GameResultsComponent').prop('winnerImg')).toEqual('/img/winner.png');
  });

  it('should set loser image when player wins', () => {
    const container = shallow(<GameContainer />);
    container.instance().updateResults(-1);

    expect(container.find('GameResultsComponent').prop('winnerImg')).toEqual('/img/loser.png');
  });

  it('should set tie image when it is a tie', () => {
    const container = shallow(<GameContainer />);
    container.instance().updateResults(0);

    expect(container.find('GameResultsComponent').prop('winnerImg')).toEqual('/img/tie.png');
  });
});
