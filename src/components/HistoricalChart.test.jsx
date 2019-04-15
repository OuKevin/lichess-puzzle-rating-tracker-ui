import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HistoricalChart from './HistoricalChart'

describe('HistoricalChart', () => {
  it('renders as expected with no data', () => {
    const wrapper = shallow(<HistoricalChart />)

    expect(toJson(wrapper)).toMatchSnapshot();
  })
  it('renders as expected with data', () => {
    const data = [
      {
        "rating": 1751,
        "creation_date": "2019-03-14T04:59:49.635Z"
      },
      {
        "rating": 1773,
        "creation_date": "2018-11-12T04:59:50.027Z"
      }]
    const wrapper = shallow(<HistoricalChart data={data} />)

    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
