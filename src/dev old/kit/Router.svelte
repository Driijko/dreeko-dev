<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS --------------------------------------------
  import site from "./scripts/site.js";

  // IMPORT COMPONENTS ------------------------------------------
  import Splash from "./pages/Splash.svelte";
  import LoadingScreen from "./pages/LoadingScreen.svelte";

  // LOCAL STATE ------------------------------------------------
  let page = "splash";
  let pageExitDuration = 3000;
  let restartCount = 0;

  // FUNCTIONS -------------------------------------------------
  function restart() {
    restartCount++;
  }

  // RUN SCRIPTS -----------------------------------------------
  site(pageExitDuration, restart);

  // EVENT HANDLERS --------------------------------------------
  function handlePageLink(e) {
    page = e.detail.page;
  }

</script>

<!-- MARKUP --------------------------------------------------- -->
<div>
  {#if page === "loading-screen"}
    {#key restartCount}
      <LoadingScreen 
        on:page-link={handlePageLink} 
        {pageExitDuration}
      />
    {/key}

  {:else if page === "splash"}
    {#key restartCount}
      <Splash 
        on:page-link={handlePageLink} 
        {pageExitDuration}
      />
    {/key}
  {/if}
</div>