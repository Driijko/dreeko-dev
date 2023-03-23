<!-- SCRIPTS /////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS ------------------------------------------------
  import { onMount } from "svelte";

  // IMPORT STORES --------------------------------------------------
  import { currentPage } from "../stores/site.js";

  // IMPORT COMPONENTS -----------------------------------------------
  import AboutMainLayer from "../layers/AboutMainLayer.svelte";

  // ELEMENT / COMPONENT REFERENCES ---------------------------------
  let page;

  // LIFECYCLE --------------------------------------------------------
  onMount(()=> {
    currentPage.set(page);
  });
</script>

<!-- MARKUP /////////////////////////////////////////////////////////// -->
<div bind:this={page} class="page regular-scroll">
  <AboutMainLayer />
</div>

<!-- STYLES ///////////////////////////////////////////////// -->
<style>

</style>