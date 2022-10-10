<!-- SCRIPTS /////////////////////////////////////////////////// -->
<script>
  // IMPORT STORES --------------------------------------------------
  import { currentPage } from "../stores/site.js";

  // ELEMENT / COMPONENT REFERENCES --------------------------------
  let splash;
</script>

<!-- MARKUP /////////////////////////////////////////////////////////// -->
<div bind:this={splash} class="page">
  Splash Page
  <a href="./loading-screen" on:click|preventDefault={()=> currentPage.setCurrentPage(splash, "loading-screen")} >Loading Screen Link</a>
  <a href="./home" on:click|preventDefault={()=> currentPage.setCurrentPage(splash, "home")} >Home</a>
</div>


<style>
  a {
    display: block;
    border: 4px solid red;
    margin: 1rem;
  }
</style>