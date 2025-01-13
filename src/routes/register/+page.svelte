<script>
  import { onMount } from 'svelte';

  let users = [];
  let filtered = [];

  onMount(async () => {
    try {
      const response = await fetch('https://random-data-api.com/api/v2/users?size=100&response_type=json');
      const data = await response.json();
      users = data;
      users.forEach(element => {
        if(element.gender == "Male"){
          filtered = [...filtered,element]
        }
      });
      

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });

  let name="";
  function handleLogin(){
    if(name!=""){
      if (filtered.filter(e => e.first_name === name).length > 0) {
        alert("Welcome back "+name);
    }
    else{
      alert("")
    }
  }

  }
  </script>

  <svelte:head>
  <link rel="stylesheet" href="/pico.min.css" />

  <style>
    nav {
      margin-left: 10%;
      margin-right: 10%;
    }
  </style>
</svelte:head>

<main>
  <h1>Random Users</h1>
  <ul>
    {#each filtered as user}
      <li>{user.first_name}+{user.gender}</li>
    {/each}
  </ul>
</main>




<h1>Login</h1>
  <form on:submit|preventDefault={handleLogin}>
    <div>
      <label for="username">Username</label>
      <input id="username" name="username" type="text" required bind:value={name}/>
    </div>
    <div>
      <label for="password">Password</label>
      <input id="password" name="password" type="password"  />
    </div>
        <button type="submit">Login</button>
  </form>




<!--
<div class="grid">
 <div class="item"></div>
 <div class="item"></div>
 <div class="item"></div>
 <div class="item"></div>

 <div class="item"></div>
 <div class="item"></div>
 <div class="item"></div>
 <div class="item"></div>
</div>
-->
<style>

    h1{
        margin-bottom: -0px;
    }

  </style>
