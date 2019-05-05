import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HistoricalChartContainer from './HistoricalChartContainer'

describe('HistoricalChartContainer', () => {
  it('shallow renders as expected', () => {
    const wrapper = shallow(<HistoricalChartContainer />)

    expect(toJson(wrapper)).toMatchSnapshot();
  })
  it('mount renders as expected', () => {
    const wrapper = mount(<HistoricalChartContainer />)

    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
