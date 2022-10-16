<!-- SCRIPTS ///////////////////////////////////////////////// -->
<script>
  import ExpandableList from "../ExpandableList.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<ExpandableList>
  <div slot="main-list">
    <h2>Technology</h2>
    <ul>
      <li>
        <button type="button">HTML</button>
      </li>
      <li>
        <button type="button">CSS</button>
      </li>
      <li>
        <button type="button">JavaScript</button>
      </li>
      <li>
        <button type="button">SVG</button>
      </li>
      <li>
        <button type="button">React</button>
      </li>
      <li>
        <button type="button">Svelte</button>
      </li>
      <li>
        <button type="button">GSAP3</button>
      </li>
    </ul>
  </div>
</ExpandableList>

<!-- STYLE //////////////////////////////////////////////////////// -->
<style>
  h2 {
    background-color: var(--color1-1);
    color: var(--color2) ;
    font-family: "Julius Sans One", sans-serif;
    font-size: 2rem;
    padding: 2rem;
  }
</style>