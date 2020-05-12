<script context="module">
  import stateNames from '../data/stateNames.js';
  export async function preload(page) {
    const state = page.params['state'];
    if (stateNames.find(s => s.abbreviation === state) === undefined) {
      this.error (404, "State Not Found.");
      return
    }

    try {
    return { state };
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
</script>

<svelte:head>
  <title>Covid 19 US - {state}</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid 19 - {state}</h1>
  </div>
</div>

<h1>{state}</h1>

<CovidStat />
<CovidChart />
