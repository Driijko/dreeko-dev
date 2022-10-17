<!-- SCRIPTS ///////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS -------------------------------------------
  import {fly } from 'svelte/transition';

  // IMPORT COMPONENTS ---------------------------------------
  import ExpandableList from "../ExpandableList.svelte";

  // LOCAL SETTINGS ----------------------------------------------
  let technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "SVG",
    "React",
    "Svelte",
    "GSAP3",
  ];
  let transitionDuration = window.innerWidth >= window.innerHeight ? 1000 : 0;
</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<ExpandableList>
  <div id="area1" slot="main-list" let:selectItem={selectItem}>
    <h2>
      Technology
      <span>*Click a technology to learn more</span>
    </h2>
    <ul>
      {#each technologies as technology, index}
      <li>
        <button class="main-list-button" on:click={()=> selectItem(index)} type="button">{technology}</button>
      </li>
      {/each}
    </ul>
  </div>

  <div id="area2" slot="selected-list-item" 
    let:closeArea2={closeArea2} let:currentSelected={currentSelected}
  >
    {#if currentSelected === 0}
      <section in:fly="{{delay: transitionDuration, duration: transitionDuration, x: window.innerWidth * 0.7}}" out:fly="{{duration:transitionDuration, x: window.innerWidth * 0.7}}">
        <h3>HTML</h3>
        <div class="description-body">
          <p class="sub-header">
            HyperText Markup Language
          </p>
          <p>
            HTML is perhaps the most fundamental coding language in the creation of the world-wide-web. Designed by Sir Tim Berners Lee in 1990, HTML became the foundation upon which virtually all of the contemporary internet has been built.
          </p>
          <p>
            HTML is a markup language, a coding language meant to assist a person in creating a complex document. Prior to HTML, other markup languages had been created for the purpose of, for instance, creating mathematical and scientific diagrams which would be difficult to create in standardized way using normal writing software.
          </p>
          <p>
            One of the primary roles of HTML is to deliver content to a web-page. Through HTML, a front-end developer can deliver text, images, audio, and video, as well as embedding content from other websites.
          </p>
          <p>
            HTML is also designed to enable certain forms of interactivity for users, including links, text inputs, checkboxes, video-player controls, and form submission, among other things.
          </p>
          <p>
            HTML can include "meta-data", data which is not shown to the user but which assists a browser in interpreting and providing context for the code. Such data can play an important role in responsive design, text encoding, and search-engine optimization.
          </p>
          <p>
            Lastly, HTML allows front-end developers to organize a web-page into a hierarchical structure, dividing a page into sections, sub-sections, etc, reflecting the semantic inter-relationships between different elements. Elements such as headers, figures, lists and tables all assist the developer in determining the underlying structure of the document. In turn, screen-reader software for the visually-impaired can read these structures to appropriately determine how a web-page should be read out.
          </p>
          <p>
            The original version of HTML only had 18 elements. Various versions of the language have appeared since 1990, the most recent version, at the time of writing, is HTML 5, from 2014, which has approximately 110 elements. Although relatively simple compared to CSS and JavaScript, HTML continues to grow and develop, and to be the fundamental access point through which code is delivered to the browser.
          </p>
          <p>Learn more at <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
        </div>
      </section>
    {:else if currentSelected === 1}
      <section in:fly="{{delay: transitionDuration, duration: transitionDuration, x: window.innerWidth * 0.7}}" out:fly="{{duration:transitionDuration, x: window.innerWidth * 0.7}}">
        <h3>CSS</h3>
        <div class="description-body">
          <p class="sub-header">
            Cascading Style-Sheets
          </p>
          <p>
            CSS is a coding language built for one purpose: to style HTML elements. While HTML provides content, structure and certain forms of interactivity, without CSS, web-pages would all look very, very ugly. It is through CSS that the front-end developer can pick out matching colors or interesting fonts, and construct layouts and animations. HTML delivers content, but CSS allows the developer to style that content into something attractive and stylistically compelling.
          </p>
          <p>
            The seperation of content from style was an important choice made by Sir Tim Berners Lee when designing the original version of HTML. During the 1990s, different ideas of how to style web-pages were considered, including the ideas that browsers would choose how to style content, or that users could makes such choices. In the second half of the 90s, CSS emerged as the official option for allowing web-developers to style web-pages.
          </p>
          <p>
            Because HTML and CSS are seperate, web developers can potentially style the same content in a variety of ways. An interesting demonstration of this idea is shown at the website <a href="http://www.csszengarden.com/" target="_blank" rel="noopener noreferrer">CSS Zen Garden</a>, wherein the same content is styled in a number of distinctive aesthetic themes.
          </p>
          <p>
            It turns out that styling web elements is a fairly complicated thing, and CSS is in fact quite a bit more complex than HTML. CSS deals with layout, typography, colors, adjusting images and animations. Using CSS, a developer can change the color of a link when it is hovered over, or the image of the cursor when this happens, or they can adjust the layout of a page when a user views the page on mobile, versus when they view it on a desktop computer monitor. 
          </p>
          <p>
            Among the most important problems that CSS tackles is layout. Because websites are viewed on a variety of different types of devices with different sizes and aspect-ratios of screens, website layout is a particularly tricky challenge, a challenge which developers call "responsive design". The original conception of the world-wide-web was as a series of inter-linked text documents, and so printed material texts provided an influential reference point in early approaches to website layout. However, as time went on and the conception of the internet expanded, this reference proved to be more and more limiting. The widespread adoption of smartphones following the release of the first Iphone in 2007 further complicated matters by forcing developers to consider designing for both desktop and mobile devices. CSS has evolved significantly since the late 1990s to address these problems, introducing two modules: Flexbox and Grid, which have become particularly important tools in responsive design, as well as media queries: blocks of code which adjust the style of a page specifically based on properties of a device, such as it's screen width or aspect-ratio.
          </p>
          <p>
            CSS allows the website stylist to manipulate colors in a variety of ways as well. Besides a number of pre-defined colors, CSS allows the developer to create color programatically using features such as hue, saturation and lightness. Developers can also alter the opacity of elements, making them semi-transparent, allowing elements to overlap and blend. CSS can even alter the colors of images using filters, allowing an image to be blurred, darkened, or made black-and-white.
          </p>
          <p>
            One of the most exciting features of CSS is it's ability to create animations. Developers can animate based on user actions, such as hovering over an element or clicking it, or they can animate things when a page first loads, or have an animation loop indefinitely. Using animations, developers can move, rotate, scale and stretch elements, and this can in turn help to create more fluid, intuitive and compelling user interfaces.
          </p>
          <p>
            CSS has gone through several iterations, introducing new features over time. Although technically the most recent standard version of CSS is CSS3, the reality of this coding language is more complex. CSS is broken into a number of sub-groups (for example, there is a sub-group for fonts, and another sub-group for colors), and each of these groups is being worked on and updated in a semi-independent fashion. Thus while HTML and JavaScript have specific official versions, CSS exists in bit more of a fluid, ambiguous state, essentially being updated all the time. Furthermore, different browsers have different levels of support of different parts of CSS. This can cause problems for developers, as code that works in one browser can turn out to be broken in a different browser because of differences in which parts of CSS a browser is currently supporting, as well as differences in how browsers interpret the CSS specification.
          </p>
          <p>
            As CSS matures, it becomes a more and more powerful tool for developers, allowing for more sophisticated approaches to responsive design or animation, and helping to make the web, hopefully, a place that is not just informative, but also beautiful.
          </p>
          <p>Learn more at <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
        </div>
      </section>
    {/if}
    <button id="close-area2" type="button" on:click={closeArea2}>X</button>
  </div>
</ExpandableList>

<!-- STYLE //////////////////////////////////////////////////////// -->
<style>
  #area1, #area2 {
    height: 100%;
  }
  #area1 {
    padding: 1rem;
    background-color: var(--color2);
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
    flex-direction: column;
    height: 20%;
    line-height: 1.5;
    border-radius: 0.3rem 0.3rem 0 0;
    position: relative;
  }
  h2 span {
    position: absolute;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    animation: fade-out 5s 2s ease-out forwards;
    bottom: 0%;
  }
  ul {
    border: 0.3rem solid var(--color1-1);
    height: 80%;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 0.3rem 0.3rem;
  }
  li {
    border: 0.2rem solid var(--color1-1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: var(--color1-2);
  }
  .main-list-button {
    border: 0.1rem solid var(--color2);
    width: 10rem;
    font-size: 1.4rem;
    border-radius: 0.3rem;
    background-color: var(--color1);
    color: var(--color2);
  }
  #area2 {
    background-color: var(--color1);
  }
  section {
    height: 100%;
  }
  h3 {
    background-color: var(--color1);
    height: 10%;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    font-size: 2rem;
    color: var(--color2);
    font-family: "Montserrat", sans-serif;
  }
  .description-body {
    height: 90%;
    padding: 1rem 0.5rem 0 3vw;
    line-height: 1.5;
    overflow-y: scroll;
    -ms-overflow-style: none;  
    scrollbar-width: none;  
    background-color: var(--color2);
  }
  .description-body::-webkit-scrollbar {
    display: none;
  }
  .sub-header {
    font-size: 1.3rem;
    font-weight: bold;
  }
  .description-body p {
    margin: 1rem 0;
    word-spacing: 0.2rem;
    max-width: 70ch;
  }
  @media (hover:hover) {
    .description-body p a:hover, .description-body p a:focus {
      color: var(--color2);
      background-color: var(--color1);
    }
  }
  @media screen and (orientation: portrait) {
    #area2 {
      position: relative;
    }
    #close-area2 {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      background-color: var(--color1);
      color: var(--color2);
      font-size: 2rem;
      font-weight: bold;
      height: 10%;
      width: calc(var(--viewport-height)/10);
      border-left: 0.3rem solid var(--color2);
    }
  }
  @media screen and (orientation: landscape) {
    #area2 {
      border: 0.5rem solid var(--color1);
    }
    #close-area2 {
      display: none;
    }
  }
</style>