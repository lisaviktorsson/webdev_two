<script>
  let stringLetters = "QWERTYUIOP"

  let username = ""
  let letters = []
  randomizeLetters()
  function randomizeLetters(){
    letters = []

    for (let letter of stringLetters){
      let top = Math.random()*80
      let left = Math.random()*80
      letters.push({letter:letter,top:top,left:left})
    }
    letters = letters
  }

  function addLetter(index){
    let letter = letters[index]
    username += letter.letter
    letter.top = Math.random()*90
    letter.left = Math.random()*90

    letters = letters

  }

  setInterval(randomizeLetters, 2000);

</script>

<section>

{#each letters as {letter,top,left},i }
  <button on:click={()=>addLetter(i)} style="top:{top}%; left:{left}%;">{letter}</button>
{/each}
</section>
<p>username:  {username}</p>


<style>

  section{
    position: relative;
    background-color: beige;
    width: 80vw;
    height: 80vh;
    margin: auto;
  }

  button{
    position: absolute;
    background-color:aqua;
    padding: 1em;
  }

  button:active{
    transform: scale(1.4);
    transition: all 40ms;
  }
</style>