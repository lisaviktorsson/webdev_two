<script>

let image = "https://picsum.photos/id/70/367/267"
let photo = "https://picsum.photos/id/88/367/267"
let picture = "https://picsum.photos/id/93/367/267"

let images = [{img:image, votes:0}, {img:photo, votes:0}, {img:picture, votes:0}, {img:photo, votes:0}]


</script>




<title>Photo App</title>

<h1>Photo App</h1>


<div class="photos">
    {#each images as {img, votes}}
        <div class="image-wrapper" on:click={()=>{votes++}} >
            <img src={img} alt="">
            <p>Votes: {votes}</p>
        </div>
    {/each}
</div>





<style>

  h1{
    text-align: center;
    font-size: 50px;
    margin: 20px;
    color: grey;
  }
.photos{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /*Sätter att bredden på vår box enbart får vara 90% av webbfönstrets bredd*/
    max-width: 90vw;
    margin: auto;
    background-color: gainsboro;
    border-radius: 20px;
  }

.image-wrapper img:active { transform: scale(0.9); }

.image-wrapper {
  flex-grow:1;
  margin: 10px;
  flex-basis: 300px;
  transition: flex-grow 1s;

}

.image-wrapper img {
  width: 100%;
  border-radius: 20px;
  transition: transform 0.5s;
  border: 2px solid ghostwhite;
  box-shadow: 4px 8px 0px rgba(0,0,0,0.5);
}

.image-wrapper:hover{
  flex-grow:2;
}

</style>