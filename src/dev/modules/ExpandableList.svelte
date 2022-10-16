<!-- SCRIPTS //////////////////////////////////////////////////////// -->
<script>
  // DEVICE STATE --------------------------------------------------
  let viewportOrientation = window.innerWidth >= window.innerHeight ? "landscape" : "portrait";
  
  // LOCAL STATE -----------------------------------------------------
  let currentSelected = viewportOrientation === "landscape" ? 0 : null;
  let area2Open = viewportOrientation === "landscape" ? true : false;

  // EVENT HANDLERS ----------------------------------------------------
  function updateCurrentSelected(num) {
    currentSelected = num;
  }
  function openArea2() {
    area2Open = true;
  }
  function closeArea2() {
    area2Open = false;
  }

</script>

<!-- MARKUP ////////////////////////////////////////////////////////// -->
<section>
  <div id="area1">
    <slot name="main-list" />
  </div>
  <div id="area2"
    class:open={area2Open} class:closed={!area2Open}
  >
    <slot name="selected-list-item" />
  </div>
</section>

<!-- STYLE ////////////////////////////////////////////////////// -->
<style>
  section {
    /* border: 4px solid green; */
    height: var(--viewport-height);
    position: relative;
  }
  #area1, #area2 {
    height: 100%;
    /* border: 4px solid red; */
  }
  @media screen and (orientation: portrait) {
    #area2 {
      background-color: blue;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transform-origin: 100% 0%;
      transition: transform 2s ease-out;
    }
    #area2.open {
      transform: scale(1);
    }
    #area2.closed {
      transform: scale(0);
    }
  }
</style>