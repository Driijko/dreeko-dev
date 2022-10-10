<!-- SCRIPTS /////////////////////////////////////////////////// -->
<script>
  // IMPORT STORES --------------------------------------------------
  import { currentPage } from "../stores/site.js";

  // ELEMENT / COMPONENT REFERENCES -------------------------------
  let loadingScreen;
</script>

<!-- MARKUP /////////////////////////////////////////////////////////// -->
<div bind:this={loadingScreen} class="page">
  Loading Screen
  <a href="./splash" on:click|preventDefault={()=> currentPage.setCurrentPage(loadingScreen, "splash")} >Splash</a>
  <a href="./home" on:click|preventDefault={()=> currentPage.setCurrentPage(loadingScreen, "home")} >Home</a>
</div>


<style>
  a {
    display: block;
    border: 4px solid red;
    margin: 1rem;
    transition: background-color var(--page-exit-duration) ease-out;
  }
  a:hover {
    background-color: blue;
  }
</style>