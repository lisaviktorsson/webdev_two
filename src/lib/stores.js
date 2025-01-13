import { browser } from "$app/environment";
import { writable } from "svelte/store";

/* 
   We are using a writable store from svelte. We are keeping the store in sync with
   the localStorage in the browser.

   Read about localStorage here: 
   https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
   
*/

/* initialize the story_id to '1' if the story_id has not already been stored */
const story_id = browser ? window?.localStorage.getItem('story_id') ?? "1" : "1"
/* https://svelte.dev/tutorial/writable-stores */
export const story_id_store = writable(story_id)

if (browser) {
        /* https://svelte.dev/tutorial/auto-subscriptions */
        story_id_store.subscribe((value) => {
                /* on changes to the story_id_store, update the localStorage in the browser. */
                window?.localStorage.setItem('story_id', value);
        })
}


/* initialize the story_id to '1' if the story_id has not already been stored */
const stringchat = browser ? window?.localStorage.getItem('chat') ?? "1" : "1"
/* https://svelte.dev/tutorial/writable-stores */
export const stringchat_store = writable(stringchat)

if (browser) {
        /* https://svelte.dev/tutorial/auto-subscriptions */
        stringchat_store.subscribe((value) => {
                /* on changes to the story_id_store, update the localStorage in the browser. */
                window?.localStorage.setItem('chat', value);
        })
}






