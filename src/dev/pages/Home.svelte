<!-- SCRIPTS /////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS ------------------------------------------------
  import { onMount } from "svelte";
  // IMPORT STORES --------------------------------------------------
  import { currentPage } from "../stores/site.js";

  // IMPORT COMPONENTS ---------------------------------------------
  import Pamphlet from "../layers/Pamphlet.svelte";
  import SiteHeader from "../modules/SiteHeader.svelte";
  import HomeMain from "../modules/home/HomeMain.svelte";
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
  <Pamphlet totalSnapPointsOptions={[2, 3]}>
    <SiteHeader />
    <HomeMain />
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