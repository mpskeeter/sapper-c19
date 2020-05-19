<script>
  import TableHeader from './TableHeader.svelte';
  import TableBody from './TableBody.svelte';
  // import TableColumn from './TableColumn.svelte';

  export let tableData;
</script>

<style>
  .table {
    width: 100%;
  }

  .section {
    padding: 0.5rem 1.5rem;
  }
</style>

<div class="section">
  <div class="container">
    <table class="table is-bordered is-striped">
      <TableHeader headers={tableData.label} />
      <TableBody headers={tableData.label} data={tableData.data} />
    </table>
  </div>
</div>
