import { error } from '@sveltejs/kit';

/* don't generate these pages at build time as we want to get the latest data from the API when a user navigates here */
export const ssr = false;
export const prerender = false;

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {


    /* params.category matches to the [category] in the filesystem */
    /* for example navigating to /search/foobar in this example will put foobar in params.category */

    console.log(params.category)


    /* Perform a networked HTTP GET request to an external API  */
    /* Documentation: https://random-data-api.com/documentation */
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    });


    if (response.status != 200) {
        throw error(response.status, { message: response.statusText })
    }
    return { params, response: response.json() }; // parses JSON response into native JavaScript objects

}

