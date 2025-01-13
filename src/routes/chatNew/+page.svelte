<script>
  import { enhance } from "$app/forms";
  import ElizaBot from "elizabot";

  let eliza = new ElizaBot();
  let chat = [{ user: "eliza", text: eliza.getInitial() }];

  async function write(message) {
    //TODO: Add the new message to the chat
    chat = [...chat, { user: "you", text: message }];

    // random delay for Eliza's response time
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));

    //TODO: Add Eliza's response to the chat
    chat = [...chat, { user: "eliza", text: eliza.transform(message) }];
  }



</script>




<main>
  <section>
    {#each chat as message, i}
      <article class={message.user}>
        <p>{message.text}</p>
      </article>
    {/each}
  </section>
    <form  method="post"
    use:enhance={({ formElement, formData, action, cancel }) => {
      /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
      cancel(); //don't post anything to server
      const text = formData.get("text");
      write(text);

      // TODO: reset the form using form.reset()

      }}>
      <input type="text" name="text" placeholder="Write a message" />
      </form>
</main>


<style>

  .you{
    text-align: right;
    margin-left: 10%;
    background-color: aquamarine;
  }

  .eliza{
    text-align: left;
    margin-right: 10%;
  }


  main{
    width: 60vw;
    height: 70vh;
    margin: 10vh auto;
    background-color:cornsilk;
    padding: 10px;
    
  }

  section{
    height: 90%;
    overflow-y: scroll;}

  article, input{
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background-color: #f0f0f0;
    width: 90%;
  }
  
 

</style>