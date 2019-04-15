import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CustomTooltip from './CustomTooltip'

describe('CustomTooltip', () => {
  const props = {
    active: true,
    payload: [{ value: 100 }],
    label: new Date('2019-03-31T04:59:49.666Z'),
  }
  it('renders active tooltips as expected', () => {
    const wrapper = shallow(<CustomTooltip {...props} />)

    expect(toJson(wrapper)).toMatchSnapshot();
  })
  it('renders inactive tooltips as expected', () => {
    const wrapper = shallow(<CustomTooltip {...props} active={false} />)

    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
