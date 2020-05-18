<script context="module">
  import requests from '../data/requests.js';
  import stateNames from '../data/stateNames.js';
  export async function preload(page) {
    const stateAbbr = page.params['state'];
    const state = stateNames.find(s => s.abbreviation === stateAbbr);
    if (state === undefined) {
      this.error (404, "State Not Found.");
      return
    }

    try {
      const stats = await requests.stateStats(state.abbreviation);
      const historic = await requests.historicState(state.abbreviation);
      return { state: state.name, stats, historic };
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
  export let historic;
</script>

<svelte:head>
  <title>Covid 19 US - {state}</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid 19 - {state}</h1>
  </div>
</div>

<CovidStat {...stats} />
<CovidChart historicData={historic} title="Covid-19 - {state} "  />
