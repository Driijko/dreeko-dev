<!-- MARKUP ////////////////////////////////////////////////////// -->
<div id="container">
  <h1>About Me</h1>
  <figure>
    <img src="./about/pic0.jpg" alt="Web developer Andrij Radio, AKA: Dreeko." />
    <figcaption>Andrij Radio, <span>aka:</span> Dreeko.</figcaption>
  </figure>
  <p>I'm a freelance web developer living in Toronto, Canada.</p>
  <p>I'm obsessed with aesthetics and animation. My desire is that when someone comes to one of my websites, their first impression is "wow". Understanding both technology and design allows me to craft unique experiences that help my client's websites stand out. I'm inspired by cutting-edge web design, fine art, and even videogames.</p>
  <p>
    At the same time, presenting information in a way that is clear and easy to navigate is fundamental to good design. My work is about finding a balance between a bold sense of style and providing clarity and ease of use for the user. When these two approaches are properly balanced, the result is to create an immersive, dynamic and satisfying experience: user flow.
  </p>
  <p>
    So far in my career I've mostly worked with individuals and small projects, but I feel up for any challenge. Check out my <a href={null} >portfolio</a> for examples. My goal is always to give someone visiting one of my client's websites an experience they won't soon forget. 
  </p>
  <p>
    Besides programming and web development, music has been a major focus throughout my life. I've played in several bands in Edmonton, Montreal and Toronto, and toured and recorded. I've DJed at clubs, bars and parties, and I also co-hosted a radio show about music from Africa and the African diaspora. These days I'm mostly focused on playing classical music and writing ambient electronic music.
  </p>
</div>

<!-- STYLES //////////////////////////////////////////////////////// -->
<style>
  #container {
    position: relative;
  }
  h1 {
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
    padding: 3%;
    line-height: 1.3;
  }
</style>