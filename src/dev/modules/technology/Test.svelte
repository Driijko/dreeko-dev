<!-- svelte-ignore missing-declaration -->

<script>
  import { fade } from "svelte/transition";
  let checked = [true, true, true, true];
</script>


{#each checked as checklistItem, index}
  <input type="checkbox" bind:checked={checked[index]} />
  {#if checked[index]}
    <img transition:fade src={`./images/svg${index}.svg`} alt="Animal." />
  {/if}
{/each}















