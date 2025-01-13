import { error } from '@sveltejs/kit';

/* don't generate these pages at build time as we want to get the latest data from the API when a user navigates here */
export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {


    const url = 'https://dog.ceo/api/breeds/image/random/3';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'league-of-legends-champions.p.rapidapi.com'
        }}
    
    

    const response = await fetch(url);
    console.log(response.status)

    if (response.status != 200) {
        throw error(response.status, { message: response.statusText })
    }
    return { params, response: await response.json() }; // parses JSON response into native JavaScript objects


};

