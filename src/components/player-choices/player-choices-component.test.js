import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import PlayerChoicesComponent from './player-choices-component';

describe('Player Choices component', () => {
  it('should render the player options', () => {
    const component = shallow(<PlayerChoicesComponent play={() => ''}/>);
    expect(component.find('.player-choice')).toHaveLength(3);
  });

  it('should call play method with selected option when choice is clicked', () => {
    const playSpy = sinon.spy();
    const component = shallow(<PlayerChoicesComponent play={playSpy}/>);

    component.find('.player-choice').at(1).simulate('click');

    expect(playSpy.calledWith('paper')).toBe(true);
    expect(playSpy.callCount).toEqual(1);
  });
});
