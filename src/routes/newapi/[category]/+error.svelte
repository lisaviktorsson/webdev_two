<script>
  import { page } from "$app/stores";
  
</script>

<main>
  <h1>{$page.status}: {$page.error.message}</h1>
</main>


<style>
  main {
    margin-left: 10%;
    margin-right: 10%;
  }
  h1 {
    color: red;
  }
</style>
