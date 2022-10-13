<!-- MARKUP ////////////////////////////////////////////////////// -->
<section>
  <h3>Gorgeous<br/> Animations</h3>
  <svg id="animation1" class="uarr1" viewBox="0 0 320 480">
    <path id="path1" d="M 160 300
      Q 95 10 180 80
    "/>
  </svg>
  <button class="interface-style6" type="button" >
    <svg viewBox="0 0 384 512">
      <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
    </svg>
  </button>
</section>

<!-- STYLE ////////////////////////////////////////////////////////// -->
<style>
  section {
    height: var(--viewport-height);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    row-gap: 2rem;
    position: relative;
  }
  h3 {
    line-height: 1.3;
    font-size: 2rem;
  }
  button {
    width: 50px;
    height: 50px;
  }
  button svg {
    width: 70%;
  }
  #animation1 {
    border: 1px solid red;
    position: absolute;
    /* aspect-ratio: 9/16;
    width: 100%; */
    z-index: -1;
  }
  #animation1 path {
    stroke-width: 10;
    stroke: var(--color1);
    fill: var(--color1-1);
    opacity: 0.9
  }
  @media screen and (orientation: landscape) {
    #animation1 {
      width: auto;
      height: 100%;
    }
  }
</style>