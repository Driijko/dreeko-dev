<!-- SCRIPTS ///////////////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS ---------------------------------------------------------
  import { onMount } from "svelte";
  import page from "../scripts/page.js";

  // PROPS ------------------------------------------------------------
  export let pageExitDuration;

  // ELEMENT/COMPONENT REFERENCES -------------------------------------------
  let loadingScreen;

  // RUN SCRIPTS ---------------------------------------------------------
  const pageExit = page();
  console.log(pageExit);

  // LIFECYCYLE ---------------------------------------------------------
  onMount(()=> {
    window.addEventListener("load", ()=> pageExit(loadingScreen, "splash", pageExitDuration));
    return ()=> {
      window.removeEventListener("load", ()=> pageExit(loadingScreen, "splash", pageExitDuration));
    };
  });

</script>

<!-- MARKUP /////////////////////////////////////////////////////////////// -->
<div bind:this={loadingScreen} id="loading-screen">
  <div class="animation"></div>
  <div class="animation"></div>
  <p>Loading...</p>
</div>

<!-- STYLE //////////////////////////////////////////////////////////////// -->
<style>
  #loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: var(--vph);
    transition: opacity var(--page-exit-duration) ease-out;
  }
  p {
    font-size: 2rem;
  }
  @keyframes rotate1 {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
  @keyframes rotate2 {
    from {transform: rotate(0deg);}
    to {transform: rotate(-360deg);}
  }
  .animation {
    position: absolute;
    width: 60%;
    height: 20%;
    border-radius: 50%;
    border: 0.5rem solid var(--color1);
  }
  #loading-screen div:nth-of-type(1) {
    animation: rotate1 4s ease-in-out infinite;
  }
  #loading-screen div:nth-of-type(2) {
    animation: rotate2 4s ease-in-out infinite;
  }
</style>