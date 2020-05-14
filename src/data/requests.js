import axios from 'axios';
import parsers from './parsers';

async function usStats() {
  // [
  //   {
  //     positive: 1340412,
  //     negative: 8041823,
  //     pending: 1989,
  //     hospitalizedCurrently: 44191,
  //     hospitalizedCumulative: 145981,
  //     inIcuCurrently: 11147,
  //     inIcuCumulative: 6488,
  //     onVentilatorCurrently: 6350,
  //     onVentilatorCumulative: 551,
  //     recovered: 232733,
  //     hash: '1afc506272c11e52cd06b6bcf4e5379814ca2b33',
  //     lastModified: '2020-05-12T08:12:40.170Z',
  //     death: 75107,
  //     hospitalized: 145981,
  //     total: 9384224,
  //     totalTestResults: 9382235,
  //     posNeg: 9382235,
  //     notes: 'NOTE: "total", "posNeg", "hospitalized" will be removed in the future.',
  //   },
  // ];

  const response = await axios.get('https://covidtracking.com/api/v1/us/current.json');
  return parsers.usStats(response.data);
}

async function stateStats(state) {
  const response = await axios.get('https://covidtracking.com/api/v1/states/current.json');
  return parsers.stateStats(state, response.data);
}

async function historicUS() {
  const response = await axios.get('https://covidtracking.com/api/us/daily');

  return parsers.historicUS(response.data);
}

async function historicState(state) {
  const response = await axios.get(
    'https://covidtracking.com/api/v1/states/daily.json'
  );

  return parsers.historicState(state, response.data);
}

export default {
  usStats,
  stateStats,
  historicUS,
  historicState,
};
