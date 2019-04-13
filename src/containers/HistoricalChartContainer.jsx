import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import CustomTooltip from '../components/CustomTooltip';
import axios from 'axios';
import sortBy from 'lodash/sortBy';
import take from 'lodash/take';
import testData from '../testData';
import './historicalChartContainer.css'

export default () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // const { data } = await axios.get('/ratings')
    // setData(take(sortBy(testData, 'creation_date'), 100));
    setData(sortBy(testData, 'creation_date'));
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='chart-container'>
      <h1>Puzzle Rating for: Kevinou</h1>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="creation_date"
            tick={false}
            tickLine={false}
          />
          <YAxis domain={['dataMin - 25', 'dataMax + 25']} />
          <Tooltip content={CustomTooltip} />
          <Legend />
          <Line
            dot={false}
            type="monotone"
            dataKey="rating"
            stroke="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
