<script>
  import "../app.postcss"

  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

import { storePopup } from '@skeletonlabs/skeleton';
storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
			
  import hljs from 'highlight.js/lib/core';

  // Import each language module you require
  import xml from 'highlight.js/lib/languages/xml'; // for HTML
  import css from 'highlight.js/lib/languages/css';
  import json from 'highlight.js/lib/languages/json';
  import javascript from 'highlight.js/lib/languages/javascript';
  import typescript from 'highlight.js/lib/languages/typescript';
  import shell from 'highlight.js/lib/languages/shell';

  // Register each imported language module
  hljs.registerLanguage('xml', xml); // for HTML
  hljs.registerLanguage('css', css);
  hljs.registerLanguage('json', json);
  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('typescript', typescript);
  hljs.registerLanguage('shell', shell);

  import 'highlight.js/styles/github-dark.css';
  import { storeHighlightJs } from '@skeletonlabs/skeleton';

  storeHighlightJs.set(hljs);

  let logins = ["/password","/clickerlogin","/bounceLogin", "/painter","/dice","/photomatcher","/shop"];
  
  import {currentUser_store} from "$lib/register";
  import { onMount } from "svelte";
  $: currentUserString = $currentUser_store;
  let user;
  let path;

  function handleNavigation(event, url) {
    event.preventDefault(); // Prevent the default anchor behavior
    // Add any logic here, such as analytics or state cleanup
    if (user){
      window.location.href = url; // Perform the navigation which causes a reload
    }
    else{
      console.log("no user")
      window.location.href = "/registrering";
      path = "/registrering"
    }
  }


  onMount(() => {
    /*
      if(currentUserString.length> 2 ){
          user = JSON.parse(currentUserString);
          console.log("user", user)
      }
      if (!user && window.location.pathname != "/registrering" && window.location.pathname != "/login") {
        
          window.location.href = "/registrering";
          
      }
      else{
        path = window.location.pathname;
      }
*/
  });

  
</script>



<nav style="background-color:{user ? user.color :"grey"};">
  <a  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/">Hem</a>
  <a on:click={event => handleNavigation(event, '/telltale')} class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/telltale">Telltale</a>
  <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/memory">Memory</a>
  <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/chat">Chat</a>
  <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/search">Search</a>
  <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/blog">Blog</a>
  <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/photoapp">Photo App</a>

  
</nav>

<nav class="bg-gray-600">
  {#each logins as l}
    <a on:click={event => handleNavigation(event, l)}  class="text-gray-200 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href={l}>{l.charAt(1).toUpperCase()+l.slice(2)}</a>
  {/each}
  {#if user}
   <button class="text-gray-200 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium" on:click={()=>{$currentUser_store = " "; location.reload();}}>Logga ut</button>
  {:else}
  <button class="text-gray-200 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium" on:click={()=>{location.href="/registrering"}}>Logga in</button>
  {/if}
</nav>


<hr>
 
    <slot></slot>

  



<style>


nav{
  min-height: fit-content;
  display: flex;
}


nav button{
  margin-left: auto;
}

:global(body), :global(html){
  margin: 0%;
  padding: 0%;
  height: 100vh;
  width: 100vw;


	}

:global(body)::-webkit-scrollbar{
 display: none;
}




</style>