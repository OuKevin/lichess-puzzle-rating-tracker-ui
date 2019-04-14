import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import getDomainWithOffset from '../utils/getDomainWithOffset';

export default ({ data }) => (
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
      <YAxis domain={[getDomainWithOffset('lower'), getDomainWithOffset('upper')]} />
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
);
