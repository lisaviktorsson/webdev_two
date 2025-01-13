<script>

    import { onMount } from 'svelte';
    let name = "";
    let username = "";
    let password = "";
    let color = "blue";

    let nrAvatars = 9;
    let colors = [{color:"blue", namn:"Blå"}, {color:"red", namn:"Röd"}, {color:"green", namn:"Grön"}, {color:"yellow", namn:"Gul"}, {color:"purple", namn:"Lila"}, {color:"pink", namn:"Rosa"}, {color:"orange", namn:"Orange"}, {color:"brown", namn:"Brun"}, {color:"black", namn:"Svart"}];
    import {users_store} from "$lib/register";
    $: usersString = $users_store;
    let users = [];
    import {currentUser_store} from "$lib/register";
    $: currentUserString = $currentUser_store;
    let user;

    onMount(() => {
        console.log("onmount")
        if(usersString.length> 2 ){
            users = JSON.parse(usersString);
            console.log(users);
        }
        if(currentUserString.length> 2 ){
            user = JSON.parse(currentUserString);
            console.log("user", user)
        }
    });

    function handleLogin(){
        console.log(users, username, password);
        if (users.filter(e => e.username === username && e.password === password).length > 0) {
            user = users.filter(e => e.username === username)[0];
            $currentUser_store = JSON.stringify(user);
            console.log(user);
            location.reload();
        }
        else{
            alert("Fel användarnamn eller lösenord");
        }
    }


    function handleRegister(){
        console.log(users);
        if (users.filter(e => e.username === name && e.username.length === name.length).length > 0) {
            alert("Användarnamnet är upptaget");
        }
        else{
            users = [...users, {username: name, password: document.getElementById("password").value, email: document.getElementById("email").value, color: color}];
            console.log(users);
            $users_store = JSON.stringify(users);
        }
    }

    function reset(){
        localStorage.clear();
        users = [];
        $users_store = JSON.stringify(users);
    }

    

</script>



<main>
    {#each users as user}
    <p>{user.username}</p>
    <p>{user.password}</p>
    <p>{user.email}</p>
    <p>{user.color}</p>
    <br>
    
{/each}



<div class="container">
<h1>Login</h1>
 
<form on:submit|preventDefault={handleLogin}>
    <label for="username">Användarnamn</label>
    <input name="username" id="username" type="text" required bind:value={username}/>
    <label for="password">Lösenord</label>
    <input id="password" type="password" bind:value={password} />
  
   <input type="submit" value="Logga in" class="reg">
</form>

<a href="/registrering">Har du inget konto? Registrera dig</a>
</div>
</main>

<style>

    input{
        border-radius: 10px;
        padding-left: 5px;

    }

    label{
        color: #f0f0f0;
        font-size: 1em;
    }
   
    main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
        min-width: 300px;
        min-height: 500px;
    }
    .reg{
        margin: 2% 0%;
        width: 100%;
        padding: 1%;
        border-radius: 10px;
        background-color: #f0f0f0;
        border: none;
        cursor: pointer;
    }

    .container{
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 35%;
        height: 60%;
        background-color: #3a2e3b;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        min-width: 300px;
        min-height: 400px;
    }

    h1{
        color: #f0f0f0;
        font-size: 2em;
        margin: 10px;
    }


    input:focus{ 
        outline: gray solid 2px;
       
    }
 </style>
