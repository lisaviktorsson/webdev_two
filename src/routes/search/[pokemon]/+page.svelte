<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import Card from './card.svelte';

  import { onMount } from 'svelte';
  import {pokemons_store} from '$lib/pokemons';

  onMount(async () => {
    let pokemons = [];
    if ($pokemons_store.length > 2)
      pokemons = JSON.parse($pokemons_store);
    if (!pokemons.find(p => p.name == data.response.name) && data){
        $pokemons_store = JSON.stringify([...pokemons,{name: data.response.name}]);
     
    }
  });


</script>

{#await data}
  <p>.. waiting</p>
{:then pokemon} 
<article>
  {#each Object.entries(pokemon.response.sprites) as sprites}
    {#if typeof sprites[1] == "string"}
    <Card image={sprites[1]} info={sprites[0]}></Card>
    {/if}
  {/each}
</article>
<h1>{pokemon.response.name}</h1>
<section>

</section>

{/await}


<style> 
  section{
    height: 50%;
    width: 90%;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid black;
    border-radius: 1em;
  }

    article{
    display: flex;
    height: 30%;
    width: 90%;
    gap: 1em;
  }
  </style>

 
