<script>
  export let image;
  export let info;
</script>



<figure>
  <img src={image} alt={info}/>
</figure>



<style>
 figure{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      border-radius: 1em;
      background-color: rgba(255, 255, 255, 0.6);
      height: 100%;
      width: 100%;
    }
    figure img{
      display: block;
      width: 100%;
      height: auto;
    }

</style>