<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  export let dom;
</script>

<div bind:this={dom}>HELLO!</div>

<style>
  div {
    width: 100vw;
    height: var(--vph);
    background-color: red;
  }
</style>