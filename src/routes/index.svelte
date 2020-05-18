<script context="module">
  import requests from '../data/requests.js';

  export async function preload() {
    try {
      const stats = await requests.usStats();
      const historic = await requests.historicUS();
      return { stats, historic };
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
  export let historic;
</script>

<svelte:head>
  <title>Covid 19 US Tracker</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid 19 - US</h1>
  </div>
</div>

<CovidStat {...stats} />
<CovidChart historicData={historic} title="US Covid-19" />
<TableContainer />
