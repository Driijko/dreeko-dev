<!-- svelte-ignore missing-declaration -->

<script>
  const animals = [{
    name: "whale",
    type: "mammal",
    food: "krill",
  }, {
    name: "fox",
    type: "mammal",
    food: "mice",
  }, {
    name: "chameleon",
    type: "reptile",
    food: "bugs",
  }];
</script>

<ul>
  {#each animals as animal}
    <li>
      A {animal.name} is a {animal.type} that eats {animal.food}.
    </li>
  {/each}
</ul>












