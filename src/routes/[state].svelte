<script context="module">
  import requests from '../data/requests.js';
  import parsers from '../data/parsers.js';

  import stateNames from '../data/stateNames.js';
  export async function preload(page) {
    const stateAbbr = page.params['state'];
    const state = stateNames.find(s => s.abbreviation === stateAbbr);
    if (state === undefined) {
      this.error (404, "State Not Found.");
      return
    }

    try {
      const rawStats = await requests.stateDaily(state.abbreviation);

      const stats = parsers.parseStats(rawStats[0]);
      const chart = parsers.parseChart(rawStats);
      const table = parsers.dailyTable(rawStats);

      return { state: state.name, stats, chart, table };
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

  export let state;
  export let stats;
  export let chart;
  export let table;
</script>

<svelte:head>
  <title>Covid 19 US - {state}</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid 19 - {state}</h1>
  </div>
</div>

<CovidStat stats={stats} />
<CovidChart chartData={chart} title="Covid-19 - {state} "  />
<TableContainer data={table} />
