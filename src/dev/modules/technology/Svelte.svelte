<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORT COMPONENTS --------------------------------------------
  import TechnologyListArticle from "./TechnologyListArticle.svelte";

  // PROPS ---------------------------------------------------------
  export let main;

  // LOCAL STATE -----------------------------------------------
  let num = 0;

</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<TechnologyListArticle 
  {main}
  header={"Svelte"}
  wikiLink={"https://en.wikipedia.org/wiki/Svelte"}
>
  <p>
    In the realm of JavaScript frameworks, Svelte is the new arrival, having really only started to gain traction amongst developers following the release of version 3 in 2019. However, Svelte has quickly gained popularity in the front-end developer community thanks to it's innovative, original and intuitive design.
  </p>
  <p>
    Svelte shares several features with React, the JavaScript framework that is currently most widely used. Like React, Svelte is:<br/> 1.) a "single-page application" (SPA) which<br/>2.) allows developers to construct an app using modular components that are<br/>3.) written using HTML-style markup syntax. 
  </p>
  <figure>
    <img src="./technology/svelte-pic1.png" alt="Svelte code demonstrating JSX-style markup." />
    <figcaption>
      In Svelte, we can easily structure custom components and HTML elements hierarchically in much the same fashion as regular HTML.
    </figcaption>
  </figure>
  <p>
    One distinctive aspect of Svelte is that svelte components include JavaScript, markup, and CSS all in the same component. This means that styling components is by default integrated into the modular design. Furthermore, any CSS written in a component is scoped exclusively to that component, helping the developer avoid complications of that CSS over-writing, or being overwritten by, other CSS.
  </p>
  <figure>
    <img src="./technology/svelte-pic2.png" alt="Svelte component file demonstrating the inclusion of JavaScript, markup and CSS styles all in one component." />
    <figcaption>
      This loading-screen component demonstrates the inclusion of JavaScript, markup, and CSS styling all in one component. All the CSS written here will only apply within the component, allowing, for example, the developer to re-use the class name "animation" for other elements in other components without creating competing CSS rules.
    </figcaption>
  </figure>
  <p>
    Another distinctive aspect of Svelte is that it deviates very little from writing vanilla HTML, CSS and JavaScript. Svelte includes a number of unique features the developer must learn, but with a much smaller learning curve compared to other frameworks. This aspect has quickly established Svelte as the most accessible front-end framework.
  </p>
  <p>
    Perhaps the most signficant feature of Svelte is how it approaches development of an app versus production of that app. While a framework like React must ship the core React code with an app so that that code can run in the background of the app to interpret and respond appropriately to React code, Svelte takes developer code and compiles that code to highly optimized vanilla HTML, CSS and JavaScript for the production version. This enhances performance of an app since Svelte doesn't need to run in the background, nor is their need for a distinction between a virtual DOM and the actual DOM, as in React. Furthermore Svelte apps can ship with a minimum of small files. These factors, along with Svelte's SPA design, allow Svelte apps to be highly performant.
  </p>
  <p>
    Svelte features logic blocks within markup that greatly facilitate creating HTML in programmatic and data-driven ways. If-blocks  allow for conditional rendering of elements or components, while as each-blocks allow iterative rendering based on an array or array-like data-structure.
  </p>
  <figure>
    <img src="./technology/svelte-pic3.png" alt="Svelte code demonstrating conditional rendering." />
    <figcaption>
      If-blocks allow us to render markup if a condition is fulfilled. Here conditional rendering is used to determine which page of a website is rendered.
    </figcaption>
  </figure>
  <br/>
  <figure>
    <img src="./technology/svelte-pic4.png" alt="Svelte code demonstrating iterative rendering." />
    <img src="./technology/svelte-pic5.png" alt="The results of an interative rendering." />
    <figcaption>
      Each-blocks allow us to iterate over an array-like structure to render multiple elements. Here we use iterative rendering to construct a list.
    </figcaption>
  </figure>
  <p>
    Bindings make it easy to connect variables and data-structures with HTML elements and custom components. This is particularly useful with form elements where user interactions with the elements typically should update data. Binding the value of a form element to a variable means that a one-to-one relationship is created. If the variable is updated by code, the form element's value will reflect this. If the form element's value is updated by the user, the variable will reflect this.
  </p>
  <figure>
    <div>

    </div>
  </figure>
  <p>
    Svelte transitions provide tools for animating the addition and removal of components from the DOM. Rather than components simply appearing or disappearing, Svelte transitions animate the entrance and exits of components. 
  </p>
  <p>
    Svelte has a variety of other features to ease the developer experience, and is still very much in the process of being updated and refined. Because Svelte is a newer framework, it doesn't have as robust of a library eco-system built around it as the more established React framework. But the popularity of Svelte is helping to build that eco-system. At the time of writing, a back-end framework, Svelte-Kit, is nearing a production-ready level. Svelte-Kit is the back-end framework meant to compliment Svelte's front-end framework. Svelte-Kit includes the feature of Server-Side-Rendering (SSR) which improves both search-engine optmization (SEO), as well as page load performance. Svelte-Kit also includes routing design, allowing the user's browser's address bar to be updated by page transitions, and allowing for multiple points of entry to a website, problems that SPAs don't handle on their own.
  </p>
  <p>
    The future for Svelte and the Svelte eco-system look extremely promising. Svelte is remarkably different from other front-end frameworks, and set's a high bar with it's intuitive design, advanced modularity, and high-performance.
  </p>
</TechnologyListArticle>