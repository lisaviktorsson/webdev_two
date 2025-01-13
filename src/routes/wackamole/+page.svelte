
<!--
<script>
  import { onMount } from "svelte";
  import toast, { Toaster } from "svelte-french-toast";
  import { flip } from "svelte/animate";

  let items = [];
  let count = 0;
  let lives = 10;

  for (let index = 0; index < 60; index++) {
    items.push({ active: false, index });
  }

  onMount(async () => {
    let controller = setInterval(() => {
      if (lives > 0) {
        let index = Math.floor(Math.random() * 60);
        let item = items[index];
        item.active = true;
        index = items[index].index;
        items = items;
        setTimeout(() => {
          let index = items.findIndex((e) => e.index == item.index);
          if (items[index].active == true && lives > 0) {
            items[index].active = false;
            items = items;
            lives--;
            toast.error("missed");
          }
        }, 1000);
      } else {
        clearInterval(controller);
        clearInterval(controller2);
      }
    }, 1000);

    await new Promise((r) => {
      setTimeout(r, 1000);
    });

    let controller2 = setInterval(() => {
      if (lives > 0) {
        let index = Math.floor(Math.random() * 60);
        let index2 = Math.floor(Math.random() * 60);
        let temp = items[index];
        items[index] = items[index2];
        items[index2] = temp;
        items = items;
      } else {
        clearInterval(controller2);
      }
    }, 1337);
  });
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

{#if lives <= 0}
  <main class="container">
    <header>
      <h1>YOU LOOSE</h1>
    </header>
    <button
      on:click={() => {
        location.reload();
      }}>RESET</button
    >
  </main>
{:else}
  <main class="container">
    <progress value={lives} max="10" />
    <hr />
    <div class="mygrid">
      {#each items as item (item.index)}
        <label animate:flip>
          <button
            class:active={item.active == true}
            on:click={() => {
              if (item.active) {
                item.active = false;
                count++;
                toast.success(count.toString(), { position: "top-right" });
              } else {
                count = 0;
                lives--;
                toast.error("RESET!");
              }
            }}
            class="button"
          />
        </label>
      {/each}
    </div>
  </main>
  <Toaster toastOptions={{ position: "top-left" }} />
{/if}

<style>
  .mygrid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 10px;
    width: 100%;
  }

  .button {
    width: 80px;
    height: 80px;
    background-color: red;
    padding: 10px;
    transition: background-color 0.2;
  }

  main {
    height: 90vh;
  }

  .active {
    background-color: green;
  }
</style>
-->