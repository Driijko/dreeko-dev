<!-- SCRIPTS /////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS ------------------------------------------------
  import { onMount } from "svelte";

  // IMPORT STORES --------------------------------------------------
  import { currentPage } from "../stores/site.js";

  // IMPORT COMPONENTS -----------------------------------------------
  import HireMainLayer from "../layers/HireMainLayer.svelte";
  import SiteMenuModal from "../layers/SiteMenuModal.svelte";

  // ELEMENT / COMPONENT REFERENCES ---------------------------------
  let page;

  // LIFECYCLE --------------------------------------------------------
  onMount(()=> {
    currentPage.set(page);
  });
</script>

<!-- MARKUP /////////////////////////////////////////////////////////// -->
<div bind:this={page} class="page regular-scroll">
  <HireMainLayer />
  <SiteMenuModal />
</div>