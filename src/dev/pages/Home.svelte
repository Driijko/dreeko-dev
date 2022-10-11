<!-- SCRIPTS /////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS ------------------------------------------------
  import { onMount } from "svelte";
  // IMPORT STORES --------------------------------------------------
  import { currentPage } from "../stores/site.js";
  import { modals } from "../stores/page.js";

  // IMPORT COMPONENTS ---------------------------------------------
  import Pamphlet from "./types/Pamphlet.svelte";
  import SiteMenuModal from "../layers/SiteMenuModal.svelte";

  // ELEMENT / COMPONENT REFERENCES ---------------------------------
  let home;

  // LIFECYCLE --------------------------------------------------------
  onMount(()=> {
    currentPage.set(home);
  });
</script>

<!-- MARKUP /////////////////////////////////////////////////////////// -->
<div bind:this={home} class="page">
  <Pamphlet>

  </Pamphlet>
  <SiteMenuModal />
</div>

<style>
  a {
    display: block;
    border: 4px solid red;
    margin: 1rem;
  }
  button {
    border: 4px solid red;
  }
</style>