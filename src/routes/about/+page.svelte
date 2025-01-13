<script>
 let aside = false
 import { fade, fly } from 'svelte/transition';




</script>



<div class="size-full grid grid-cols-12 grid-rows-9  text-center">
  <header class="p-5 bg-surface-800 col-span-full row-span-2">
    <h1 class="m-5 text-6xl ">ABOUT</h1>
    <button class="chip variant-filled hover:variant-glass" on:click={e => aside = !aside}>Toggle</button>
    <p class="m-4 text-2xl">This is the about page</p>
  </header>
  <aside on:blur={() => aside=false} on:mouseenter={()=>aside = true} on:mouseleave={()=>aside = false} class=" row-start-3 row-end-9  bg-surface-700 flex flex-col justify-evenly">
    <figure class:aside={aside} >
      <img class="rounded-full " src="https://media.istockphoto.com/id/1435566677/vector/placeholder-icon-illustration.jpg?s=612x612&w=0&k=20&c=mMfFWN3fGUOv5S75bC5tmMSzFDNoqiCQFfVoMTsC4n0=" alt="placeholder">
    <figcaption class="text-2xl">Developer name</figcaption>
    </figure>
    <nav  class:aside={aside} class="flex flex-col gap-5 p-5">
      <a class="chip variant-filled hover:variant-glass" href="/about">About</a>
  
    </nav>
  </aside>
  <main class="col-span-12 grid grid-cols-2 p-5 gap-5 bg-surface-900 overflow-auto">

  <article class="variant-ghost  rounded-container-token ">
    <h1>Page</h1>
    <p>Page content</p>
  </article>
  <article class="variant-ghost rounded-container-token">
  <h1>Page</h1>
    <p>Page content</p>
  </article>
  <section class="variant-ghost  rounded-container-token ">
  </section>
 
  </main>
  <footer class="row-start-9 col-span-full bg-surface-800 flex justify-evenly items-center">
    {#each Array(3) as _}
    <button class="chip variant-glass hover:variant-filled">
      <span>Button</span></button>
    {/each}
    

  </footer >
</div>



<style>


aside{
  grid-column: 1/2;
  grid-row: 3/9;

}

aside:hover {
  grid-column: 1/3;
  transition: grid-column 300ms;

} 

aside *{
  opacity: 0.0;


}

aside:hover *{
    opacity: 1.0;
    transition: opacity 100ms;
    transition-timing-function: ease-in;

}


section {
  grid-column: span 2;
}

header {
}




main{
  grid-row: 3/9;
}





  div {
    transition: grid-template 4s;
  
    position: fixed;
    top: 0;
    left: 0;
    margin: 0%;
    background-color: white;
  }




  </style>