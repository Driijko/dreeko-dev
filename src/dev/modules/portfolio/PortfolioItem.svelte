<!-- SCRIPTS /////////////////////////////////////////////////////// -->
<script>
  // PROPS -----------------------------------------------------------
  export let logoData;
  export let genericDescriptor;
  export let date;
  export let siteAddress;
  export let pictureData;
  export let description;

  // DEVICE STATE -------------------------------------------------------
  let viewportOrientation = window.innerWidth >= window.innerHeight ? "landscape" : "portrait";
  // LOCAL STATE -----------------------------------------------------
  let area2Hidden = viewportOrientation === "landscape" ? false : true;
  let hiddenSubArea = 2;
  // let area2Hidden = false;

  // EVENT HANDLERS --------------------------------------------------
  function revealArea2() {
    area2Hidden = false;
  };
  function hideArea2() {
    area2Hidden = true;
  };
</script>

<!-- MARKUP /////////////////////////////////////////////////// -->
<section id="portfolio-item">

  <div id="area1">
    <div>
      <h3 aria-label={logoData[1]}>
        <img id="logo" src={logoData[0]} alt={logoData[1]} />
      </h3>
      <p id="descriptor-and-date">
        <span id="generic-descriptor">{genericDescriptor}</span><br/>
        <span id="date">{date}</span>
      </p>
    </div>
    {#if viewportOrientation === "portrait"}
      <button type="button" 
        on:click={revealArea2}
        class="interface-style6"
      >Learn More</button>
    {/if}
    <a href={siteAddress} 
      target="_blank"
      rel="noreferrer noopener"
    >Visit Site</a>
  </div>

  <div id="area2" class:hidden={area2Hidden} >

    <div id="sub-area1"
      class:hidden={viewportOrientation === "portrait" && hiddenSubArea === 1}
    >
      <img id="site-pic" 
        src={viewportOrientation === "portrait" ? pictureData[0] : pictureData[1]} 
        alt={pictureData[2]} 
      />
      <button class="portrait-nav-button" type="button"
        on:click={()=> hiddenSubArea = 1}
        class:hidden={viewportOrientation === "landscape"}
      >Next &gt; </button>
    </div>

    <div id="sub-area2"
      class:hidden={viewportOrientation === "portrait" && hiddenSubArea === 2}
    >
      <p id="description">{@html description}</p>
      <section id="technology-section">
        <h4>Technologies</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </section>
      <button type="button"
        on:click={()=> hiddenSubArea = 2}
        class:hidden={viewportOrientation === "landscape"}
      > &lt; Back </button>
    </div>

    <button id="exit-button" type="button" 
      class:hidden={viewportOrientation === "landscape"}
      on:click={()=> {area2Hidden = true; hiddenSubArea = 2;}}
    >X</button>

  </div>
</section>

<!-- STYLES //////////////////////////////////////////////////////// -->
<style>
  #portfolio-item {
    height: var(--viewport-height);
    position: relative;
  }
  a {
    display: block;
  }
  .hidden {
    display: none !important;
  }
  #area1, #area2 div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #area1 {
    row-gap: 2rem;
    text-align: center;
    background-color: var(--color1);
    color: var(--color1-2);
  }
  #descriptor-and-date {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    line-height: 2;
  }
  #generic-descriptor {
    font-size: 1.5rem;
  }
  #date {
    font-size: 1.2rem;
  }
  #area1 button, #area1 a {
    font-size: 1.3rem;
    background-color: var(--color1-2);
    color: var(--color2);
    border-radius: 0.3rem;
    padding: 0.3rem;
    width: 8rem;
  }
  #area1 a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #area2 button {
    font-weight: bold;
    font-size: 1.3rem;
  }
  #sub-area1 {
    row-gap: 1rem;
  }
  #sub-area2 {
    row-gap: 3rem;
  }
  #description {
    padding: 0 5vw;
    max-width: 70ch;
    line-height: 1.5;
  }
  #technology-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    row-gap: 1rem;
  }
  h4 {
    font-size: 1.2rem;
  }
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 3rem;
  }
  #exit-button {
    position: absolute;
    border: 0.2rem solid var(--color1);
    right: 0;
    font-size: 1.5rem;
    font-weight: bold;
  }


  @media screen and (orientation: portrait) {
    div {
      width: 100%;
    }
    #area1, #area2 div {
      height: 100%;
    }
    #area2 {
      position: absolute;
      left: 0;
      top: 0;
    }
    #area2 div {
      padding-top: 3rem;
      position: absolute;
      height: var(--viewport-height);
      top: 0;
      left: 0;
      background-color: var(--color2);
    }
    #exit-button {
      color: var(--color2);
      background-color: var(--color1);
      border-radius: 0 0 0 0.3rem;
    }
    #site-pic {
      width: 100%;
      height: 85%;
      background-color: var(--color2-2);
      border-top: 0.5rem solid var(--color1);
      border-bottom: 0.5rem solid var(--color1);
    }
    #sub-area2 {
      background-color: var(--color2);
    }
    #description {
      font-size: 1rem;
    }
  }
  @media screen and (orientation: landscape) {
    #portfolio-item {
      display: flex;
      padding: 1rem;
      align-items: center;
      justify-content: space-evenly;
      background-color: var(--color1);
    }
    #area1, #area2 {
      border-radius: 0.3rem;
    }
    #area1 {
      width: 30%;
      height: 100%;
      background-color: var(--color1-1);
      color: var(--color1-2);
    }
    #area1 a {
      color: var(--color1);
      transition: color 0.5s ease-out;
    }
    #area1 a:hover, #area1 a:focus {
      color: var(--color2);
    }
    #generic-descriptor {
      font-size: 1.3rem;
    }
    #date {
      font-size: 1rem;
    }
    #area2 {
      width: 60%;
      height: 100%;
      border: 0.1rem solid var(--color2);
    }
    #sub-area1 {
      height: 60%;
    }
    #sub-area2 {
      height: 40%;
      row-gap: 1rem;
    }
    #sub-area2 {
      background-color: var(--color2);
    }
    #site-pic {
      height: 100%;
      /* max-height: 50vh; */
    }
  }
  @media screen and (orientation: landscape) and (min-height: 1000px) {
    #sub-area2 {
      row-gap: 3rem;
    }
  }
</style>