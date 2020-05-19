<script>
  import TableColumn from './TableColumn.svelte';
  export let headers;
  export let data;
</script>

<tbody>
  {#each data as row (row.hash)}
    <tr>
      {#each headers as header}
        <TableColumn row={row} header={header} />
      {/each}
    </tr>
  {/each}
</tbody>

