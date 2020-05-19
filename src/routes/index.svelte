<script context="module">
  import requests from '../data/requests.js';
  import parsers from '../data/parsers.js';

  export async function preload() {
    try {
      const rawStats = await requests.usDaily();
      const stats = parsers.parseStats(rawStats[0]);
      const chart = parsers.parseChart(rawStats);

      const stateData = await requests.usTable();
      const table = parsers.cumulativeTable(stateData);

      return { stats, chart, table };
      // return { stats, chart };
    }
    catch(e) {
      this.error(500, 'Error fetching data');
      return;
    }
  }
</script>

<script>
  import CovidStat from '../components/CovidStat.svelte';
  import CovidChart from '../components/CovidChart.svelte'
  import TableContainer from '../components/TableContainer.svelte';

  export let stats;
  export let chart;
  export let table;
</script>

<svelte:head>
  <title>Covid 19 US Tracker</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid 19 - US</h1>
  </div>
</div>

<CovidStat stats={stats} />
<CovidChart chartData={chart} title="US Covid-19" />
<TableContainer data={table}/>
