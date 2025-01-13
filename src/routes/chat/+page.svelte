<script>
  import { enhance } from "$app/forms";
  import "elizabot";
  import ElizaBot from "elizabot";

  let eliza = new ElizaBot();
  import {stringchat_store} from "$lib/stores";
  import { onMount } from "svelte";
  $: stringchat = $stringchat_store;
  let chat = [];

  onMount(() => {
  if(stringchat.length> 2 ){
    chat = JSON.parse(stringchat);
    console.log(chat);
  }
  else{
    resetChat();
  }});

 function resetChat(){
    localStorage.clear();
    chat = [{ user: "eliza", text: eliza.getInitial() }];
    stringchat_store.set(JSON.stringify(chat));
 }

  async function write(message) {
    // TODO: yeet in the new message
    chat = [...chat, { user: "you", text: message }];
    stringchat_store.set(JSON.stringify(chat));
    // random delay for writing
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));

    // TODO: write the text
    chat = [...chat, { user: "eliza", text: eliza.transform(message) }];
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

<button class=".btn" on:click={resetChat}>
  Reset
</button>
<div class="container">
  <h1>TODO: Complete assignment</h1>
  <div class="scrollable">
    <!-- TODO: loop over the messages and display them -->
    {#each chat as message}
      <article>
        <span>
          {message.text}
        </span>
      </article>
    {/each}
    
  </div>
  <form
    method="post"
    use:enhance={({ form, data, action, cancel }) => {
      /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
      cancel(); //don't post anything to server
      const text = data.get("text");
      write(text);

      // TODO: reset the form using form.reset()
      form.reset();
    }}
  >
    <input type="text" name="text" />
  </form>
</div>

<style>

</style>