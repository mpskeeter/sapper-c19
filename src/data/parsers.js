import format from './format';
import moment from 'moment';
import stateNames from './stateNames';

function parseChart(historicData) {
  const fields = [
    {
      label: 'Cases',
      key: 'positive',
      color: 'rgb(100, 0, 200)',
    },
    {
      label: 'Recovered',
      key: 'recovered',
      color: 'rgb(100, 100, 200)',
    },
    {
      label: 'Total Tested',
      key: 'totalTestResults',
      color: 'rgb(10, 30, 100)',
    },
    {
      label: 'Hospitalized',
      key: 'hospitalizedCurrently',
      color: 'rgb(20, 100, 230)',
    },
    {
      label: 'Deaths',
      key: 'death',
      color: 'rgb(255, 99, 132)',
    },
  ];

  return fields.reduce((prev, next) => {
    if (historicData.filter((d) => d[next.key]).length > 4) {
      prev.push(parseChartRow(historicData, next.key, next.label, next.color));
    }

    return prev;
  }, []);
}

function parseChartRow(historicData, key, label, color) {
  const chartData = historicData.map((data) => {
    return {
      x: moment(data.date, 'YYYYMMDD'),
      y: data[key] || 0,
    };
  });

  return {
    label,
    data: chartData,
    fill: false,
    borderColor: color,
  };
}

function parseTableData(row) {
// function parseTableData(row, includeDelta) {
  let data = {
    hash: row.hash,
    tested: row.totalTestResults,
    cases: row.positive,
    positivePercentage: ((row.positive/row.totalTestResults) * 100).toFixed(2) + '%',
    hospitalized: row.hospitalizedCurrently,
    deaths: row.death,
  };

  // if (includeDelta) {
  //   data.delta = {
  //     tested: format.defaultZero(row.totalTestResultsIncrease),
  //     cases: format.defaultZero(row.positiveIncrease),
  //     positivePercentage: ((row.positiveIncrease/row.totalTestResultsIncrease) * 100).toFixed(2),
  //     // hospitalized: format.defaultZero(row.hospitalizedIncrease),
  //     deaths: format.defaultZero(row.deathIncrease),
  //   };
  // }

  // console.log('data:', data);

  return data;
}

function cumulativeTable(rawData) {
  const label = [
    {
      label: 'key',
      key: 'hash',
      display: false,
    },
    {
      label: 'State',
      key: 'state',
      displayValue: 'fullState',
      display: true,
      isLink: true,
    },
    {
      label: 'Tested',
      key: 'tested',
      display: true,
    },
    {
      label: 'Cases',
      key: 'cases',
      display: true,
    },
    {
      label: '% (Cases/Tested)',
      key: 'positivePercentage',
      display: true,
    },
    {
      label: 'Hospitalized',
      key: 'hospitalized',
      display: true,
    },
    {
      label: 'Deaths',
      key: 'deaths',
      display: true,
    },
  ];

  const data = rawData.map((row) => {
    // const rowData = parseTableData(row, false)
    const rowData = parseTableData(row)
    rowData.state = row.state;
    rowData.fullState = stateNames.find((d) => d.abbreviation === row.state).name;
    return rowData;
  });

  // console.log('data:', data);

  return {
    label,
    data
  };
}

function dailyTable(rawData) {
  const label = [
    {
      label: 'key',
      key: 'hash',
      display: false,
    },
    {
      label: 'Date',
      key: 'date',
      display: true,
    },
    {
      label: 'Tested',
      key: 'tested',
      display: true,
    },
    {
      label: 'Cases',
      key: 'cases',
      display: true,
    },
    {
      label: '% (Cases/Tested)',
      key: 'positivePercentage',
      display: true,
    },
    {
      label: 'Hospitalized',
      key: 'hospitalized',
      display: true,
    },
    {
      label: 'Deaths',
      key: 'deaths',
      display: true,
    },
  ];

  const data = rawData.map((row) => {
    // const rowData = parseTableData(row, true);
    const rowData = parseTableData(row);
    rowData.date = moment(row.date, 'YYYYMMDD').format('L');
    return rowData;
  });

  // console.log('data:', data);

  return {
    label,
    data
  };
}

function parseStats(rawStats) {
  const stats = {
    cases: rawStats.positive,
    deaths: rawStats.death,
    recovered: rawStats.recovered,
    ventilator: rawStats.onVentilatorCurrently,
    hospitalized: rawStats.hospitalized,
    icu: rawStats.inIcuCurrently,
    tested: rawStats.totalTestResults,
    updated: moment(rawStats.lastModified).format('LT'),
  };

  // console.log('stats:', stats);

  return stats;
}

export default {
  parseStats,
  parseChart,
  cumulativeTable,
  dailyTable,
};
