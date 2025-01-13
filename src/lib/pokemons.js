import { browser } from "$app/environment";
import { writable } from "svelte/store";

/* 
   We are using a writable store from svelte. We are keeping the store in sync with
   the localStorage in the browser.

   Read about localStorage here: 
   https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
   
*/

/* initialize the story_id to '1' if the story_id has not already been stored */
const pokemons = browser ? window?.sessionStorage.getItem('pokemons') ?? "" : ""
/* https://svelte.dev/tutorial/writable-stores */
export const pokemons_store = writable(pokemons)

if (browser) {
        /* https://svelte.dev/tutorial/auto-subscriptions */
        pokemons_store.subscribe((value) => {
                /* on changes to the story_id_store, update the localStorage in the browser. */
                window?.sessionStorage.setItem('pokemons', value);
        })
}
