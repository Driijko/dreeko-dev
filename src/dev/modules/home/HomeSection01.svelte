<!-- MARKUP //////////////////////////////////////////////////////// -->
<section>
  <h3>Things I am Good At:</h3>
  <p>
    <span ><span id="num">1 . )</span>Making websites that are:</span>
    <span>stylish,</span>
    <span>user friendly</span>
    <span>and flowing.</span>
  </p>
</section>

<!-- STYLES ////////////////////////////////////////////////////// -->
<style>
  section {
    height: var(--viewport-height);
  }
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    font-size: 1.5em;
  }
  span {
    text-align: center;
  }
  #num {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5em;
  }
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%;
    justify-content: space-evenly;
    border: 4px solid red;
    font-size: 1.5em;
  }
</style>