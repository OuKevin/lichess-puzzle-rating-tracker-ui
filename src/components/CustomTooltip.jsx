import React from 'react';
import formatDate from '../utils/formatDate';
import get from 'lodash/get';
import './CustomToooltip.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p>{`Rating : ${get(payload, '0.value', 0)}`}</p>
        <p>{`Date : ${formatDate(label)}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
