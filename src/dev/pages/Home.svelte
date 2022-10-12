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

  // LOCAL STATE -----------------------------------------------
  let overlayVisible = 0;

  // UPWARDS PROPS ------------------------------------------------
  function trackCurrentSnapPoint(snapPoint) {
    if (window.innerWidth < window.innerHeight) {
      if (snapPoint > 0 && snapPoint < 3) {
        overlayVisible = 1;
      } else {
        overlayVisible = 0;
      }
    }
  }

  // LIFECYCLE --------------------------------------------------------
  onMount(()=> {
    currentPage.set(home);
  });
</script>

<!-- MARKUP /////////////////////////////////////////////////////////// -->
<div bind:this={home} class="page">
  <Pamphlet {trackCurrentSnapPoint}
    totalSnapPointsOptions={[2, 3]}
  >
    <SiteHeader />
    <HomeMain />
  </Pamphlet>
  <p aria-hidden="true" class:overlay-visible={overlayVisible === 1}
  >
  Pixel-Perfect Responsive Design
  </p>
  <SiteMenuModal />
</div>

<!-- STYLES ///////////////////////////////////////////////// -->
<style>
 p {
  position: fixed;
  background-color: var(--color2);
  width: 100%;
  text-align: center;
  font-size: 2rem;
  padding: 2rem 0;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: var(--color1-2);
  background-color: var(--color1-1);
  border-bottom: 0.3rem solid var(--color1-2);
  pointer-events: none;
  transition: opacity 0.5s ease-out;
  opacity: 0;
 }
 .overlay-visible {
  opacity: 1;
 }
</style>