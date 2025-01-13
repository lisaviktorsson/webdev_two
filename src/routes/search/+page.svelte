<script>
  import { goto } from '$app/navigation'; // For programmatic navigation
  let search = '';
  
  let pokemons = [];
  import { pokemons_store } from '$lib/pokemons';

  import { onMount } from 'svelte';

  onMount(async () => {
    if ($pokemons_store.length > 2)
      pokemons = JSON.parse($pokemons_store);
  });


  import { base } from '$app/paths';
  
  
  </script>




<footer class="flex" >
    {#each pokemons as pokemon,i}
      <a class="flex-1 btn" href="search/{pokemon.name}">{pokemon.name}</a>
    {/each}
</footer>


  <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
  <a href="{base}/search/{search}">{search}</a>


<style>


a{
  background-color: rgba(0,0,0,0.4);
}
  input{
    border-radius: 10px;
    padding: 1em;
    font-size: large;
  }

  footer{
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 5vh;
    background-color: rgba(0,0,0,0.4);
  }

  footer a {
    color:white;
    transition: 100ms transform;
  }


  footer a:hover{
    background-color: rgba(0,0,0,0.8);
    transform: scale(1.1);

  }

 


</style>


