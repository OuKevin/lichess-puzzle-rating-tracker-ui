import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import axios from 'axios';
import sortBy from 'lodash/sortBy';
import take from 'lodash/take';
import testData from '../testData';

export default () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // const { data } = await axios.get('/ratings')
    setData(take(sortBy(testData, 'creation_date'), 100));
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>Historical Lichess Puzzle Rating</h1>
      <LineChart
        data={data}
        width={730}
        height={250}
        scale={'auto'}
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
        />
        <YAxis
          domain={['dataMin - 100', 'dataMax + 100']}
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="rating" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </>
  )
}
