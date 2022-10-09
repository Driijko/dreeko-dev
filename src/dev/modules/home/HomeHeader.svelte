<!-- SCRIPTS ////////////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS ---------------------------------------------------
  import { onMount } from "svelte";
    import { get_spread_object } from "svelte/internal";

  // LIFECYCLE --------------------------------------------------------
  onMount(()=> {
    const tl = gsap.timeline();
    tl.from(".line-group1", {
      delay: 2,
      duration: 3.5,
      attr: {
        y1: "100%",
        x1: "100%",
      },
      stagger: 0.15,
      strokeWidth: 100,
      ease: "power2.out",
      stroke: "hsla(220, 100%, 100%, 1)",
    }, 0);
    tl.from(".line-group2", {
      delay: 2,
      duration: 3.5,
      attr: {
        y2: "0%",
        x2: "0%",
      },
      stagger: 0.15,
      strokeWidth: 100,
      ease: "power2.out",
      stroke: "hsla(220, 100%, 100%, 1)",
    }, 0);
  });
</script>

<!-- MARKUP ///////////////////////////////////////////////////////// -->
<div>
  <svg>
    <line class="line-group1" x1="-5%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="0%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="5%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="10%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="15%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="20%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="25%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="30%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="35%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="40%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="45%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="50%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="55%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="60%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="65%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="70%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="75%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="80%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="85%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="90%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="95%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="100%" y1="-5%" x2="100%" y2="100%" />

    <line class="line-group2" x1="0%" y1="0%" x2="105%" y2="105%" />
    <line class="line-group2" x1="0%" y1="0%" x2="100%" y2="105%" />
    <line class="line-group2" x1="0%" y1="0%" x2="90%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="85%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="80%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="75%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="70%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="65%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="60%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="55%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="50%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="45%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="40%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="35%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="30%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="25%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="20%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="15%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="10%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="5%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="0%" y2="100%" />
  </svg>
</div>

<!-- STYLES //////////////////////////////////////////////////////////// -->
<style>
  div {
    height: calc(var(--vph) - 7.5rem);
    /* background-color: var(--color1); */
  }
  svg {
    width: 100%;
    height: 100%;
    /* opacity: 0; */
    /* animation: fade-in 5s 2s forwards ease-out; */
  }

  line {
    stroke: var(--color1);
    stroke-width: 1vw;
    stroke-linecap: round;
  }

  @media screen and (min-width: 1280px) {
    line {
      stroke-width: 3vw;
    }
  }
</style>