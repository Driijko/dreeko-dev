<!-- SCRIPTS ////////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS -------------------------------------------------
  import { onMount } from "svelte";
  import page from "../scripts/page.js";
  import pamphlet from "../scripts/pamphlet.js";

  // IMPORT LAYER / MODULE COMPONENTS ---------------------------------
  import SiteHeader from "../modules/SiteHeader.svelte";
  import SiteMenuModal from "../layers/SiteMenuModal.svelte";
  import HomeHeader from "../modules/home/HomeHeader.svelte";
  import HomeSection1 from "../modules/home/HomeSection1.svelte";

  // ELEMENT / COMPONENT REFERENCES --------------------------------
  let snapScrollContainer;
  let snapPoints = [];

  // RUN SCRIPTS ----------------------------------------------
  const pageExit = page();

  // LOCAL STATE -----------------------------------------------------
  let modalsOpen = {
    siteMenu: false,
  };

  // EVENT HANDLERS ---------------------------------------------------
  function openModal(modal) {
    modalsOpen[modal] = true;
    modalsOpen = modalsOpen;
  };

  function closeModal(modal) {
    modalsOpen[modal] = false;
    modalsOpen = modalsOpen;
  }

  // LIFECYCLE --------------------------------------------------------
  onMount(()=> {
    const cleanUp = pamphlet(snapScrollContainer, snapPoints);
    return cleanUp;
  });
</script>

<!-- MARKUP ////////////////////////////////////////////////////////// -->
<div bind:this={snapScrollContainer} id="snap-scroll-container">
  <SiteHeader bind:dom={snapPoints[0]} {pageExit}
    openSiteMenuModal={()=> openModal("siteMenu")}
  />
  <HomeHeader />
  <HomeSection1 bind:dom={snapPoints[1]} />
</div>

<SiteMenuModal
  open={modalsOpen.siteMenu}
  closeModal={()=> closeModal("siteMenu")}
/>

<!-- STYLE //////////////////////////////////////////////////////////// -->
<style>
  div {
    transition: transform 1s ease-in-out;
  }
</style>