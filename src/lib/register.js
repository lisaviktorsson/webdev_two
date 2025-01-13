import { browser } from "$app/environment";
import { writable } from "svelte/store";





/* initialize the users to "" if the users has not already been stored */
const users = browser ? window?.localStorage.getItem('users') ?? "" : ""

/* above does:
    if running in the browser:
        - get the users from localStorage if it exists
        - otherwise, set the users to "" 
    else:
        - set the users to ""
*/


/* https://svelte.dev/tutorial/writable-stores */
export const users_store = writable(users)

if (browser) {
        /* https://svelte.dev/tutorial/auto-subscriptions */
        users_store.subscribe((value) => {
                /* on changes to the users_store, update the localStorage in the browser. */
                window?.localStorage.setItem('users', value);
        })
}



/* initialize the story_id to '1' if the story_id has not already been stored */
const currentUser = browser ? window?.localStorage.getItem('currentUser') ?? "" : ""
/* https://svelte.dev/tutorial/writable-stores */
export const currentUser_store = writable(currentUser)

if (browser) {
        /* https://svelte.dev/tutorial/auto-subscriptions */
        currentUser_store.subscribe((value) => {
                /* on changes to the story_id_store, update the localStorage in the browser. */
                window?.localStorage.setItem('currentUser', value);
        })
}



