<!-- SCRIPTS ////////////////////////////////////////////////////// -->
<script>
  // IMPORT STORES & SCRIPTS --------------------------------------------
  import {setUp, currentPage} from "./stores/site.js";

  // IMPORT PAGE COMPONENTS -------------------------------------------
  import LoadingScreen from "./pages/LoadingScreen.svelte";
  import Splash from "./pages/Splash.svelte";
  import Home from "./pages/Home.svelte";

  // RUN SCRIPTS ----------------------------------------------------
  setUp();
</script>

<!-- MARKUP --------------------------------------------------- -->
<div>
  {#if $currentPage === "loading-screen"}
      <LoadingScreen />
  {:else if $currentPage === "splash"}
      <Splash />
  {:else if $currentPage === "home"}
    <Home />
  {/if}
</div>