import React, { useEffect, useState } from 'react';
import HistoricalChart from '../components/HistoricalChart';
import axios from 'axios';
import './historicalChartContainer.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import RatingStatistics from '../components/RatingStatistics';
import DateRangeSelection from '../components/DateRangeSelection';

export const HistoricalChartContainer = () => {
  const [data, setData] = useState([]);
  const [numberOfDaysDisplayed, setNumberOfDaysDisplayed] = useState(30);

  const fetchData = async (numberOfDaysDisplayed) => {
    const { data } = await axios.get(`/ratings?numberOfDaysDisplayed=${numberOfDaysDisplayed}`);
    setData(data);
  };

  useEffect(() => {
    fetchData(numberOfDaysDisplayed);
  }, [numberOfDaysDisplayed]);

  if (data.length === 0) {
    return <LinearProgress />;
  }

  return (
    <>
      <div className='chart-container'>
        <h1>Puzzle Rating for: Kevinou</h1>
        <HistoricalChart data={data} />
        <DateRangeSelection numberOfDaysDisplayed={numberOfDaysDisplayed} setNumberOfDaysDisplayed={setNumberOfDaysDisplayed}/>
      </div>
      <div>
        <RatingStatistics data={data}/>
      </div>
      </>
  );
};

export default HistoricalChartContainer;
