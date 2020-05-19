<script>
  import format from '../data/format.js';

  export let header;
  export let row;

  $: key = header.key;
  $: value = row[key];
  // $: delta = row.delta && row.delta[key];

  // $: arrow = null;

  // $: if (row.delta) {
  //   if (delta !== undefined && delta !== 0) {
  //     if (delta > 0) {
  //       arrow = "up"
  //     }
  //     if (delta < 0) {
  //       arrow = "down"
  //     }
  //   }
  // }
</script>

{#if (header.display)}
<td>
  <span style="float:left; width: 100px">
    {#if (header.isLink)}
      <a href="{value}">{row[header.displayValue]}</a>
    {:else}
      {format.number(value)}
    {/if}
  </span>
  <!-- {#if (arrow !== null)} -->
    <!-- <span style="float:right; margin:0 auto; width: 100px"> -->
      <!-- <img src="arrow-tiny-{arrow}.jpg" alt="" />{' '}{format.number(delta)} -->
    <!-- </span> -->
  <!-- {/if} -->
</td>
{/if}
