import React, { useEffect, useState } from 'react';
import HistoricalChart from '../components/HistoricalChart';
import axios from 'axios';
import sortBy from 'lodash/sortBy';
// import testData from '../testData';
import './historicalChartContainer.css'
import LinearProgress from '@material-ui/core/LinearProgress'

export const HistoricalChartContainer = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get('/ratings')
    // setData(take(sortBy(testData, 'creation_date'), 100));
    setData(sortBy(data, 'creation_date'));
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='chart-container'>
      <h1>Puzzle Rating for: Kevinou</h1>
      {data.length > 0
        ? <HistoricalChart data={data} />
        : <LinearProgress />
      }
    </div>
  )
}

export default HistoricalChartContainer
