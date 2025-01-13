<script>
    import Upload from './Upload.svelte';
    let name = "";
    let username = "";
    let password = "";
    let color = "blue";

    let nrAvatars = 9;
    let colors = [{color:"blue", namn:"Blå"}, {color:"red", namn:"Röd"}, {color:"green", namn:"Grön"}, {color:"yellow", namn:"Gul"}, {color:"purple", namn:"Lila"}, {color:"pink", namn:"Rosa"}, {color:"orange", namn:"Orange"}, {color:"brown", namn:"Brun"}, {color:"black", namn:"Svart"}];
    import {users_store} from "$lib/register";
    let users = [];
    import {currentUser_store} from "$lib/register";
    $: currentUserString = $currentUser_store;
    let user;
    import { onMount } from 'svelte';
    onMount(() => {
        /*Check if has more then 2 characters*/
        if($users_store.length > 2){
            users = JSON.parse($users_store);
        }
        if(currentUserString.length> 2 ){
            user = JSON.parse(currentUserString);
            console.log("user", user)
        }
    });

    function handleRegister(){
        console.log(users);
        if (users.filter(e => e.username === name && e.username.length === name.length).length > 0) {
            alert("Användarnamnet är upptaget");
        }
        else{
            let new_user = {username: name, password: document.getElementById("password").value, email: document.getElementById("email").value, color: color};
            users = [...users, new_user];
            $users_store = JSON.stringify(users);
        }
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
   
    <div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};">
    </div>
<h1>Registrering</h1>

 
<form on:submit|preventDefault={handleRegister} >
    <label for="username">Användarnamn</label>
    <input name="username" id="username" type="text" required bind:value={name}/>
    <label for="password">Lösenord</label>
    <input id="password" type="password" />
    <label for="email">Email</label>
    <input id="email" type="email"  />
    <label for="hair" >Favoritfärg</label>
            <select id="hair" bind:value={color}>
                {#each colors as c}
                    <option value={c.color}>{c.namn}</option>
                {/each}
            </select>
    <br>
   <input type="submit" value="Registrera" class="reg">
</form>
<a href="/login">Har du redan ett konto? Logga in</a>
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
        height: 80%;
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
