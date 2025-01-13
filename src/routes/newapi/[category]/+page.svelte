<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

{#await data}
  <p>.. waiting</p>
{:then thedata} 
  <img src={thedata.response.message} alt= "dog"/>
{/await}

<style> 



  </style>

 
