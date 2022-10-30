<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORT COMPONENTS --------------------------------------------
  import TechnologyListArticle from "./TechnologyListArticle.svelte";

  // PROPS ---------------------------------------------------------
  export let main;

</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<TechnologyListArticle 
  {main}
  header={"GSAP3"}
  subHeader={"Green Sock Animation Platform 3"}
  link={["https://en.wikipedia.org/wiki/HTML", "the Green Sock website."]}
>

</TechnologyListArticle>