<!-- SCRIPTS /////////////////////////////////////////////////// -->
<script>
  // IMPORT STORES --------------------------------------------------
  import { currentPage } from "../stores/site.js";

  // ELEMENT / COMPONENT REFERENCES ---------------------------------
  let home;
</script>

<!-- MARKUP /////////////////////////////////////////////////////////// -->
<div bind:this={home} class="page">
  Home Page
  <a href="./loading-screen" on:click|preventDefault={()=> currentPage.setCurrentPage(home, "loading-screen")} >Loading Screen</a>
  <a href="./splash" on:click|preventDefault={()=> currentPage.setCurrentPage(home, "splash")} >Splash</a>
</div>

<style>
  a {
    display: block;
    border: 4px solid red;
    margin: 1rem;
  }
</style>