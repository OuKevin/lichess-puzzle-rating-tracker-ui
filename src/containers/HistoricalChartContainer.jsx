import React, { useEffect, useState } from 'react';
import HistoricalChart from '../components/HistoricalChart';
import axios from 'axios';
import './historicalChartContainer.css'
import LinearProgress from '@material-ui/core/LinearProgress'
import RatingStatistics from '../components/RatingStatistics'

export const HistoricalChartContainer = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get('/ratings')
    setData(data);
  };

  useEffect(() => {
    fetchData()
  }, [])

  if (data.length === 0) {
    return <LinearProgress />
  }

  return (
    <>
      <div className='chart-container'>
        <h1>Puzzle Rating for: Kevinou</h1>
        <HistoricalChart data={data} />
      </div>
      <div>
        <RatingStatistics data={data}/>
      </div>
      </>
  )
}

export default HistoricalChartContainer
