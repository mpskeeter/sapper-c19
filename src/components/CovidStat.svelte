<script>
  import format from '../data/format.js';

  export let stats;
</script>

<style>
  .columns {
    border: solid 1px black;
  }
</style>

<div class="section">
  <div class="container">
    <div class="columns">
      <h2 class="is-3 column">Cases: {format.number(stats.cases)}</h2>
      <h2 class="is-3 column">Deaths: {format.number(stats.deaths)}</h2>
      <h2 class="is-3 column">Recovered: {format.number(stats.recovered)}</h2>
      <h2 class="is-3 column">Updated: {stats.updated}</h2>
    </div>
  </div>
</div>

<div class="section">
  <div class="container">
    <div class="columns">
      <h2 class="is-3 column">Tested: {format.number(stats.tested)}</h2>
      <h2 class="is-3 column">Hospitalized: {format.number(stats.hospitalized)}</h2>
      <h2 class="is-3 column">Total ICU: {format.number(stats.icu)}</h2>
      <h2 class="is-3 column">Total Ventilator: {format.number(stats.ventilator)}</h2>
    </div>
  </div>
</div>