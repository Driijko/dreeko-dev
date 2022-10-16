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
  div {
    padding: 1rem;
    height: 100%;
  }
  h2 {
    background-color: var(--color1-1);
    color: var(--color2) ;
    font-family: "Julius Sans One", sans-serif;
    font-size: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
  }
  ul {
    border: 0.3rem solid var(--color1-1);
    height: 80%;
    display: flex;
    flex-direction: column;
  }
  li {
    border: 0.2rem solid var(--color1-1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  button {
    border: 0.1rem solid var(--color1);
    width: 50%;
    font-size: 1.4rem;
    border-radius: 0.3rem;
  }
</style>