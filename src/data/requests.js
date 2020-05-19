import axios from 'axios';

async function getApiData(url) {
  const response = await axios.get(url);
  return response.data;
}

async function usDaily() {
  return await getApiData(`https://covidtracking.com/api/v1/us/daily.json`);
}

async function usTable() {
  return await getApiData('https://covidtracking.com/api/v1/states/current.json');
}

async function stateDaily(state) {
  return await getApiData(`https://covidtracking.com/api/v1/states/${state}/daily.json`);
}

export default {
  usDaily,
  usTable,
  stateDaily,
};
