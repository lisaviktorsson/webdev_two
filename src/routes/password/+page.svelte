
<script>
    import { onMount } from 'svelte';   
    let username = "";
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-_.".split('');
    let value = 0;
	let top = 50;
	let left = 50;
	// up = 38
	// down = 40
	// right = 39
	// left = 37
	function onKeyDown(e) {
		 switch(e.keyCode) {
			 case 38:
				 top -= 15;
				 break;
			 case 40:
				 top += 15;
				 break;
			 case 37:
				 left -= 15;
				 break;
			 case 39:
				 left += 15;
				 break;
        case 13:
            checkPosition();
            break;
		 }
	}
	

    let positions = [];

    function checkPosition(){
        
        positions.forEach((position) => {
            let topL = position.top;
            let leftL = position.left;
            let letter = position.letter;
            console.log(Math.abs(topL-(top+25))<25 && Math.abs(leftL-(left+25))<25)
            if (Math.abs(topL-(top))<30 && Math.abs(leftL-(left))<30 ){

                username+=letter;
                
            }
        })
    }
    onMount(() => {
    function getLetterPositions() {
    if (document){

      positions = letters.map((letter, i) => {
       
           
        const letterElement = document.getElementById(`letter-${i}`);
        const rect = letterElement.getBoundingClientRect();
        
        return {
          letter: letter,
          top: (rect.top + rect.bottom) / 2,
          left: (rect.left + rect.right) / 2
        };
      });}
    }

    // Call the function on mount
    getLetterPositions();
    })
  
</script>



<div>
    <h1>Enter username: {username}</h1>
    <button on:click={()=>{username=""}}>Reset</button>

    <div class="letters">
    {#each letters as letter,i}

        <div  id={`letter-${i}`} class="letter">{letter}</div>
    {/each}

    <div id="selector" class="selector" style="left: {left}px; top: {top}px">
	</div>
</div>

</div>





<p> {top+25}, Left: {left+25}</p>

<div>
    {#each positions as { letter, top, left }}
      <p>{letter}: Top: {top}, Left: {left}</p>
    {/each}
  </div>

<svelte:window on:keydown|preventDefault={onKeyDown} />
<style>

.selector {
		width: 50px;
		height: 50px;
		background-color: green;
		position: absolute;
	}
.letters{
    display: flex;
    flex-wrap: wrap;
}
.letter{
    width:50px;
    height: 50px;
    background-color: darkslategray;
    margin: 20px;
    text-align: center;
}
</style>

