import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HistoricalChart from './HistoricalChart'

describe('HistoricalChart', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<HistoricalChart />)

    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
