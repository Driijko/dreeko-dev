<!-- SCRIPTS ////////////////////////////////////////////////////// -->
<script>
  // IMPORT STORES & SCRIPTS --------------------------------------------
  import {setUp, currentPageName, resetCount} from "./stores/site.js";

  // IMPORT PAGE COMPONENTS -------------------------------------------
  import LoadingScreen from "./pages/LoadingScreen.svelte";
  import Splash from "./pages/Splash.svelte";
  import Home from "./pages/Home.svelte";

  // RUN SCRIPTS ----------------------------------------------------
  setUp();

</script>

<!-- MARKUP --------------------------------------------------- -->
<div>
  {#if $currentPageName === "loading-screen"}
    <LoadingScreen />
  {:else if $currentPageName === "splash"}
    {#key $resetCount}
      <Splash />
    {/key}
  {:else if $currentPageName === "home"}
    {#key $resetCount}
      <Home />
    {/key}
  {/if}
</div>