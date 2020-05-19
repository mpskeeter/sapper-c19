<script>
  export let headers;
</script>

<thead>
  <tr>
  {#each headers as header}
    {#if (header.display)}
      <th>{header.label}</th>
    {/if}
  {/each}
  </tr>
</thead>
