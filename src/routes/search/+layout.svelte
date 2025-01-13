


<script>

import {base} from "$app/paths";
console.log("base", base)
</script>
<main >
  <slot />
</main>
<div class="backdrop"></div>


<style>

  main {
    position: relative;
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 60vw;
    background-color: rgba(255, 255, 255, 0.8);
    margin: 5vh auto;
    border-radius: 1em;
    border: 10px solid navy;
  }
  .backdrop{
    z-index: -1;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-image: url("https://imageio.forbes.com/specials-images/imageserve/604202ff091b6539cb90fcbc/The-backs-of-a-number-of-Pok-mon-cards-/960x0.jpg?format=jpg&width=960");
    background-size: cover;
    filter: blur(5px);
  }
  </style>