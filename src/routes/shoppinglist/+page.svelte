<script>

let varor = [{name: "Ägg", bought:true, priority: 1}, {name: "Kaffe", bought:false,  priority: 2}, {name: "Mjöl", bought:false,  priority: 3}, {name: "Mjölk", bought:false,  priority: 4}, {name: "Bröd", bought:false,  priority: 5}, {name: "Smör", bought:false,  priority: 6}, {name: "Yoghurt", bought:false,  priority: 7}];

let vara = ""
import { fade } from 'svelte/transition';

$: varor.sort((a, b) => a.priority - b.priority);


</script>


 <form on:submit|preventDefault={() => {
  if(vara.length > 0)
    varor = [...varor, {name: vara, bought:false}];
    vara = "";
  }}>
    <input type="text" id="varor" bind:value={vara} placeholder="Lägg till vara"/>
    <button type="submit">Lägg till vara</button>
  </form>

<main class="container">
  <h1>Shopping List</h1>
 
  <div class="categories">
    <section>
      <h2>Varor att köpa</h2>
      <ol>
        {#each varor as vara}
        {#if !vara.bought}
          <li transition:fade>
            {vara.name}
            <button on:click={() => vara.bought = true}>Köpt</button>
            <button on:click={() => varor = varor.filter(v => v !== vara)}>Ta bort</button>
            <input type="number"  bind:value={vara.priority} min=1 max={varor.length} />

          </li>
        {/if}
        {/each}
      </ol>
    </section>
    <section>
        <h2>Köpta varor</h2>
        <ul>  
       {#each varor as vara}
        {#if vara.bought}
          <li transition:fade>{vara.name}
            <button on:click={() => vara.bought = false}>Ej köpt</button>
            <button on:click={() => varor = varor.filter(v => v !== vara)}>Ta bort</button>
          </li>
        {/if}
          {/each}
        </ul>
    </section>
  </div>
</main>



<style>

li{
  border-bottom-width: 1px;  
}

  form{
    height: min-content;
  }

  ul{
    list-style-type: circle;
    margin: 1em;
    list-style-position: inside;
  }

  ol{
    list-style-type: decimal;
    margin: 1em;
    list-style-position: inside;
  }

  .categories section:first-child{
    background-color: rgba(0, 0, 0, 0.1)
  }
 
  .categories section:last-child{
    background-color: rgba(0, 0, 0, 0.3)
  }
  h2{
    background-color: rgba(0, 0, 0, 0.2);
    text-align: center;
    padding: 0.5em;
    font-size:1.5em;
  }

  section{
    height: 100%;
  }
  .categories{
    grid-gap: 10px;
    height: 100%;
    background-color: aqua;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  h1{
    background-color: pink;
    padding: 2px 1em;
    border-radius: 10px;
    justify-self: center;
    align-self: center;
  }

  .container{
    width: 60vw;
    height: 70vh;
    background-color: beige;
    border-radius: 20px;
    margin: 5vh auto ;
    display: grid;
    grid-template-rows: 1fr 8fr 1fr;
   

   
    
  }
</style>