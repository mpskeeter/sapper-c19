<script>
  import TableFilter from './TableFilter.svelte';
  import Table from './Table.svelte'

  export let data;

  $: tableData = data;
</script>

<TableFilter />
<Table {tableData} />
