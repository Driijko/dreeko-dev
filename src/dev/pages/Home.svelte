<!-- SCRIPTS /////////////////////////////////////////////////// -->
<script>
  // IMPORT STORES --------------------------------------------------
  import { currentPage } from "../stores/site.js";
  import { modals } from "../stores/page.js";

  // ELEMENT / COMPONENT REFERENCES ---------------------------------
  let home;
</script>

<!-- MARKUP /////////////////////////////////////////////////////////// -->
<div bind:this={home} class="page">
  Home Page
  <p>{$modals.siteMenu}</p>
  <button on:click={()=> modals.open("siteMenu")} type="button" >Modals Open</button>
  <button on:click={()=> modals.close("siteMenu")} type="button" >Modals Close</button>
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