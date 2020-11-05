import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import getDomainWithOffset from '../utils/getDomainWithOffset';

const HistoricalChart = ({ data }) => (
  <ResponsiveContainer width="100%" height="80%">
    <LineChart data={data}>
      <XAxis dataKey="creation_date" tick={false} />
      <YAxis domain={[getDomainWithOffset('lower'), getDomainWithOffset('upper')]} />
      <Tooltip content={CustomTooltip} />
      <Legend />
      <Line dataKey="rating" dot={false} stroke="#8884d8" type="step" />
    </LineChart>
  </ResponsiveContainer>
);

export default HistoricalChart
