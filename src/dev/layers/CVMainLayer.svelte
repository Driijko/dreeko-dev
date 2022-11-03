<!-- SCRIPTS ///////////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS ---------------------------------------------
  import { onMount } from "svelte";

  // IMPORT COMPONENTS -------------------------------------------
  import SiteHeader from "../modules/SiteHeader.svelte";
  import CV from "../modules/cv/CV.svelte";

  // ELEMENT / COMPONENT REFERENCES -------------------------------
  let main;
</script>

<!-- MARKUP ////////////////////////////////////////////////////////// -->
<main class="regular-scroll" bind:this={main}>
  <SiteHeader />
  <CV {main} />
</main>

<!-- STYLE ///////////////////////////////////////////////////////// -->
<style>

</style>