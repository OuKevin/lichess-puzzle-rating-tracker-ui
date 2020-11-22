import React from 'react';
import HistoricalChartContainer from './containers/HistoricalChartContainer'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './App.css';

const App = () =>
<ThemeProvider theme={theme}>
  <div className="App">
    <HistoricalChartContainer />
  </div>
  </ThemeProvider>


export default App;
