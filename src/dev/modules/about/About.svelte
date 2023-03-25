<!-- SCRIPTS ///////////////////////////////////////////////////////// -->
<script>
  import {pageExit} from "../../stores/site.js";
</script>

<!-- MARKUP ////////////////////////////////////////////////////// -->
<div id="container">
  <div id="sub-container1">
    <h2>About Me</h2>
    <figure>
      <img src="./about/pic0.webp" alt="Web developer Andrij Radio, AKA: Dreeko." />
      <figcaption>Andrij Radio, <br class="landscape"/><span>aka:</span> Dreeko.</figcaption>
    </figure>
  </div>
  <div id="sub-container2">
    <p>I'm a freelance web developer living in Toronto, Canada.</p>
    <p>I'm obsessed with aesthetics and animation. My desire is that when someone comes to one of my websites, their impression is "wow". Understanding both technology and design allows me to craft unique experiences that help my client's websites stand out. I'm inspired by cutting-edge web design, fine art, and even videogames.</p>
    <p>
      At the same time, presenting information in a way that is clear and easy to navigate is fundamental to good design. My work is about finding a balance between a bold sense of style and providing clarity and ease of use for the user. When these two approaches are properly balanced, the result is to create an immersive, dynamic and satisfying experience: user flow. Check out my <a class="interface-style7" href={null} on:click|preventDefault={()=> pageExit("portfolio")} >portfolio</a> for examples. My goal is always to give someone visiting one of my client's websites an experience they won't soon forget. 
    </p>
    <p>
      Besides programming and web development, music has been a major passion throughout my life. I've played in several bands in Edmonton, Montreal and Toronto, and toured and recorded. I've DJed at clubs, bars and parties, and I also co-hosted a radio show about music from Africa and the African diaspora. These days I'm mostly focused on playing classical music and writing ambient electronic music.
    </p>
    <p>
      All fonts taken from <a class="interface-style7" href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">Google Fonts</a>: <span class="julius">Julius Sans One</span>, <span class="baloo">Baloo 2</span>, <span class="montserrat">Montserrat</span>, and <span class="courgette">Courgette</span>.
    </p>
    <p>
      Some SVG icons take from <a class="interface-style7" href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a>.
    </p>
    <p>
      Three images taken from <a class="interface-style7" href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>, by the following photographers: <a class="interface-style7" href="https://unsplash.com/photos/G9i_plbfDgk" target="_blank" rel="noopener noreferrer">Jeremy Bishop</a>, <a class="interface-style7" href="https://unsplash.com/photos/IGfIGP5ONV0" target="_blank" rel="noopener noreferrer">Anna Pelzer</a>, and <a class="interface-style7" href="https://unsplash.com/photos/vw_gFDCXvMw" target="_blank" rel="noopener noreferrer">Pawel Czerwinski</a>.
    </p>
  </div>
</div>

<!-- STYLES //////////////////////////////////////////////////////// -->
<style>
  #container {
    position: relative;
    opacity: 0;
    animation: fade-in 2s 1s ease-in forwards;
  }
  h2 {
    position: absolute;
    left: 3%;
    top: 1%;
    font-size: 2em;
  }
  figure {
    border: 0.3em solid var(--color1);
    display: flex; 
    flex-direction: column;
  }
  figcaption {
    border-top: 0.3em solid var(--color1);
    padding: 1%;
    font-size: 1.3em;
    text-align: center;
    font-weight: bold;
  }
  span {
    font-weight: 400;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    padding: 1em;
    line-height: 1.3;
  }
  .julius {
    font-family: "Julius Sans One", sans-serif;
  }
  .baloo {
    font-family: "Baloo 2", cursive;
  }
  .courgette {
    font-family: "Courgette", cursive;
  }
  @media screen and (orientation:landscape) {
    #container {
      display: flex;
    }
    h2 {
      position: initial;
      padding-left: 3%;
      text-align: center;
    }
    #sub-container1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: var(--color1);
      color: var(--color2);
      gap: 1em;
      padding: 5% 0%;
      flex: 1;
    }
    #sub-container2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* gap: 0.1em; */
      flex: 2.5;
    }
    p {
      max-width: 70ch;
      line-height: 1.5;
      letter-spacing: 0.05em;
    }
  }
</style>