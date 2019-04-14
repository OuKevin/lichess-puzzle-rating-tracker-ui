import React from 'react';
import formatDate from '../utils/formatDate';
import './CustomToooltip.css'

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p>{`Rating : ${payload[0].value}`}</p>
        <p>{`Date : ${formatDate(label)}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
