<!-- SCRIPTS ///////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS ---------------------------------------------
  import { transition_in } from "svelte/internal";
import { slide } from "svelte/transition";

  // SITE STATE -------------------------------------------------
  const viewportOrientation = window.innerWidth >= window.innerHeight ?
    "landscape" : "portrait";

  // LOCAL STATE -------------------------------------------------
  const cvSectionsOpen = [false, false, false, false, false, false, false];

  // EVENT HANDLERS ---------------------------------------------
  function handleClick(index, id) {
    cvSectionsOpen[index] = !cvSectionsOpen[index];
    if (cvSectionsOpen[index]) {
      gsap.to(id, {
        duration: 1,
        attr: {
          x1: 10,
          y1: 50,
          x2: 90,
          y2: 50,
        },
      });
    } else {
      gsap.to(id, {
        duration: 1,
        attr: {
          x1: 50,
          y1: 10,
          x2: 50,
          y2: 90,
        },
      });
    };
  }
</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<div id="background">
  <header id="page-header">
    <h2>CV</h2>
    <p><a id="download-link" href="" download>Download pdf version</a></p>
  </header>
  <section id="cv">

    <header id="cv-header">
      <h3>Andrij Radio</h3>
      <p>Front-End Web-Developer</p>
      <p>Creative web-developer,<br class:no-display={window.innerWidth > 1000} /> passionate about design,<br class:no-display={window.innerWidth > 1000} /> aesthetics and cutting-edge tech.</p>
    </header>

    <address>
      <ul>
        <div>
          <li>
            <a href="https://github.com/Driijko" target="_blank" rel="noopener noreferrer">
              <svg id="github-logo" viewBox="0 0 496 512">
                <title>Github Profile</title>
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
              </svg>
              github.com/Driijko
            </a>
          </li>
          <li>
            <a href="mailto:dreekodev@gmail.com" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 512 512">
                <title>Email</title>
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
              </svg>
              dreekodev@gmail.com
            </a>
          </li>
        </div>
        <div>
          <li>
            <a href="tel:4167009363" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 512 512">
                <title>Phone</title>
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
              </svg>
              416-700-9363
            </a>
          </li>
          <li>
            <a href="https://www.google.com/maps/place/Toronto,+ON/@43.7183953,-79.6582295,10z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 384 512">
                <title>Location</title>
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/>
              </svg>
              Toronto, Canada
            </a>
          </li>
        </div>

      </ul>
    </address>

    <div id="column-container">
      <div id="column1" class="column">

        <section class="cv-section">

          <header>
            <h4>WORK EXPERIENCE</h4>
            <button class="portrait" type="button"
              on:click={()=> handleClick(0, "#line1")}
            >
            <svg viewBox="0 0 100 100">
              <line x1="10" y1="50" x2="90" y2="50" />
              <line id="line1" x1="50" y1="10" x2="50" y2="90" />
            </svg>
            </button>
          </header>

          {#if cvSectionsOpen[0] || viewportOrientation === "landscape"}
            <div transition:slide>
              <section class="cv-sub-section">
                <h5>Freelance Web Developer</h5>
                <p class="date">06/2020 - Present</p>
                <p class="description">
                  Design, build and deploy web-sites from the ground-up, including custom layouts, icons and animations. Communicate with clients with a variety of interests to achieve specific goals, as well as re-designing based on changing interests.
                </p>
              </section>
            </div>
          {/if}
        
        </section>

        <section class="cv-section">
          <header>
            <h4>PROJECTS</h4>
            <button class="portrait" type="button"
              on:click={()=> handleClick(1, "#line2")}
            >
            <svg viewBox="0 0 100 100">
              <line x1="10" y1="50" x2="90" y2="50" />
              <line id="line2" x1="50" y1="10" x2="50" y2="90" />
            </svg>
            </button>
          </header>

          {#if cvSectionsOpen[1] || viewportOrientation === "landscape"}
            <div transition:slide>
              <p class="note">* For more details: <a href={null}>portfolio page</a> </p>
              <section class="cv-sub-section">
                <h5>Therapist Professional Profile</h5>
                <p class="date">01/2022 - Present</p>
                <p class="description">
                  Profile page for the private practice of Toronto therapist Tara McMahon. Developed a visual design utilizing linear gradients and textures to produce a relaxing, friendly, yet professional tone. Animated page entrances that reinforce semantic design. Logo design. <a href="https://driijko.github.io/tara-mcmahon">Visit website.</a>
                </p>
              </section>
              <section class="cv-sub-section">
                <h5>Radio-Play Streaming Site</h5>
                <p class="date">08/2021 - 02/2022</p>
                <p class="description">
                  Website for streaming the sci-fi radio-play Caretakers of the Waiting, with customized animations accompanying each act of the play. Use of SVG and GSAP3 animation library. <a href="https://driijko.github.io/caretakers-of-the-waiting">Visit website.</a>
                </p>
              </section>
              <section class="cv-sub-section">
                <h5>Music Group Album Profile</h5>
                <p class="date">01/2022 - 03/2022</p>
                <p class="description">
                  Website for streaming the album <i>mood</i> by Toronto group <em>nonono</em>. Customized and animated multi-track audio/animation player, with distinct animations for each album track. Use of SVG, and GSAP3 animation library. <a href="https://driijko.github.io/nonono-mood">Visit website.</a>
                </p>
              </section>
              <section class="cv-sub-section">
                <h5>Essay on Piet Mondrian</h5>
                <p class="date">10/2021 - 05/2022</p>
                <p class="description">
                  Website hosting a multi-chapter essay on the life and art of famous abstract painter Piet Mondrian. Visual design and animations apply Mondrian's aesthetic to web-design style and layout. <a href="https://driijko.github.io/mondrian">Visit website.</a>
                </p>
              </section>
            </div>
          {/if}

        </section>

        <section class="cv-section">
          <header>
            <h4>CAREER GOALS</h4>
            <button class="portrait" type="button"
              on:click={()=> handleClick(2, "#line3")}
            >
            <svg viewBox="0 0 100 100">
              <line x1="10" y1="50" x2="90" y2="50" />
              <line id="line3" x1="50" y1="10" x2="50" y2="90" />
            </svg>
            </button>
          </header>
          
          {#if cvSectionsOpen[2] || viewportOrientation === "landscape"}
            <div transition:slide>
              <p class="description">
                My main interest is in creating user flow through optimizing performance, designing intuitive, "tactile" interfaces, and providing continuity through animation. The technologies that most excite me currently are Svelte, SVG and the GSAP3 animation library. I look forward to learning about data visualization, server-side rendering and the JAMstack. I would like to become a full-stack developer, as well as an expert in web-design and animation.
              </p>
            </div>
          {/if}
        </section>

      </div>

      <div id="column2" class="column">

      </div>

    </div>


  </section>
</div>


<!-- STYLE //////////////////////////////////////////////////////// -->
<style>
  .no-display {
    display: none;
  }
  #background {
    background-color: var(--color1-3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
  }
  #page-header {
    line-height: 1.5;
    display: none;
  }
  h2 {
    font-family: "Julius Sans One", sans-serif;
    color: var(--color2);
    font-size: 4rem;
    letter-spacing: 0.5rem;
    text-align: center;
  }
  #download-link {
    color: var(--color3-1);
    display: block;
  }
  #cv {
    font-family: "Montserrat", sans-serif;
  }
  #cv-header {
    background-color: var(--color2-3);
    color: var(--color1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 1rem;
    padding: 1rem;
    display: none;
  }
  h3 {
    font-size: 2rem;
  }
  #cv-header p:nth-of-type(1) {
    font-size: 1.2rem;
    font-weight: bold;
  }
  address {
    background-color: var(--color1);
    color: var(--color2);
    display: none;
  }
  address ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 1.5rem;
  }
  address ul div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 1.5rem;
  }
  address li {
    padding: 0.25rem 0;
  }
  #github-logo {
    width: 1.5rem;
  }
  address a {
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    column-gap: 0.5rem;
  }
  .cv-sub-section {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .date {
    color: var(--color1-4);
  }
  .description {
    line-height: 1.3;
  }

  @media screen and (orientation: portrait) {
    #background {
      padding: 1rem 0.5rem;
    }
    #cv {
      width: 100%;
      background-color: var(--color1-1);
    }
    #cv-header {
      line-height: 1.2;
    }
    .cv-section {
      border: 0.3rem solid var(--color1);
    }
    .cv-section > header {
      background-color: var(--color2-1);
      display: flex;
      justify-content: space-between;
      align-items:center;
      column-gap: 0.5rem;
      padding: 0.25rem 0.5rem;
      border-bottom: 0.3rem solid var(--color1);
    }
    .cv-section > header button {
      font-weight: bold;
      font-size: 2rem;
      border: 0.1rem solid var(--color1);
      aspect-ratio: 1 / 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.3rem;
      width: 2rem;
    }
    .cv-section > header button svg {
      width: 100%;
      stroke-width: 10;
    }
    .cv-section > header button svg line {
      stroke: var(--color1);
      stroke-width: 15;
    }
    .cv-section > div {
      background-color: var(--color2);
      padding: 1rem;
    }
    .note {
      font-size: 0.9rem;
      margin-bottom: 1rem;
      color: var(--color1-4)
    }
    h5 {
      font-size: 1.2rem;
    }
  }
  @media screen and (orientation: landscape) {
    #background {
      padding: 4rem;
    }
    #cv {
      aspect-ratio: 8.5 / 11;
      width: 50rem;
      background-color: var(--color2);
    }
    #column-container {
      padding: 1rem;
      display: flex;
    }
    .column {
      width: 50%;
    }
    .cv-section {
      margin-bottom: 2rem;
    }
    .cv-section > header {
      margin-bottom: 1rem;
    }
    h4 {
      font-size: 1.2rem;
      text-decoration: underline;
      color: var(--color1-4);
    }
    .note {
      font-size: 0.7rem;
      font-weight: bold;
      color: var(--color1-4);
      margin-bottom: 1rem;
    }
    h5 {
      font-size: 1rem;
    }
    .date {
      font-size: 0.6rem;
      font-weight: bold;
      letter-spacing: 0.05rem;
      font-style: italic;
    }
    .description {
      font-size: 0.7rem;
      font-weight: bold;
      word-spacing: 0.1rem;
      line-height: 1.5;
      max-width: 45ch;
    }
  }
  @media (hover: hover) {
    #download-link:hover, #download-link:focus {
      color: var(--color3);
      /* transform: scale(1.2); */
    }
    #cv-header p:nth-of-type(2) {
      font-size: 0.8rem;
    }
    address a:hover, address a:focus {
      color: var(--color3);
    }
    .description a:hover, .description a:focus {
      background-color: var(--color1);
      color: var(--color2);
      text-decoration: none;
    }
    .note a:hover, .note a:focus {
      background-color: var(--color1-4);
      color: var(--color2);
      text-decoration: none;
    }
  }
</style>