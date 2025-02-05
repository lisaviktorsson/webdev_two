

<script lang="ts">

  let color = "transparent";
  let snakecolor = "#0E784D";
  let lettercolor = "#2C3371"
  let size = 36;
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-_.".split("");
  let pixelsize = 15;
  let username:string = "";
  let speed = 250;
    
  let pixels:Array<Array<{color:string,letter:string}>>;
    
  function resetPixels(size:number){
      //assign random indexes for the letters
      let tempLetters:Array<{l:string,id:number}> = [];
      letters.forEach((letter)=>{
          let index:number;
          do{
          index = Math.floor(Math.random() * size*size); 
          }while (tempLetters.length>0 && tempLetters.filter((l) => l.id == index).length != 0)
          tempLetters.push({l:letter,id:index});
      })

      //Construct the grid of list of rows
      pixels = [];
      let row:Array<{color:string,letter:string}>;
      // to keep track of the letters random indices
      let k = 0;
      for(let i = 0; i<size;i++){
          row = []
          for(let j = 0; j<size;j++){
              // get the letter with index k
              let templetter = tempLetters.filter((l) => l.id == k);  
              // if letter at index add letter otherwise empty
              row.push(templetter.length>0?{color:lettercolor,letter:templetter[0].l}:{color:color,letter:""})
              k++;
          }
          pixels.push(row)
      }
  }
  resetPixels(size)

  let snakecol = 0;
	let snakerow = 0;
  let coldir = 0;
  let rowdir = 0;

  let intervalId:NodeJS.Timeout;
	// up = 38
	// down = 40
	// right = 39
	// left = 37
	function onKeyDown(e:any) {
    switch(e.keyCode) {
			 case 38:
              rowdir=-1;
              coldir = 0;
				 break;
			 case 40:
              rowdir=1;
              coldir = 0;
				 break;
			 case 37:
              coldir=-1;
              rowdir= 0;
				 break;
			 case 39:
              coldir=1;
              rowdir = 0;
				 break;
		 }
    
    // clear the existing interval - we only want one
    if (intervalId)
        clearInterval(intervalId)
    //each speed -ms update snake position based on direction
    intervalId = setInterval(()=>{
        let tempcol = snakecol+ coldir;
        let temprow = snakerow + rowdir;
        //check so not outside of grid
        if(temprow> -1 && temprow < size && tempcol > -1 && tempcol < size ){
            snakecol = tempcol;
            snakerow = temprow;
        }
        // reverse direction and reset username if hit wall
        else{
            username="";
            rowdir= -rowdir;
            coldir = -coldir;
        }


    }, speed);
	}


  function letterCollision(pixel:{color:string,letter:string}){
    username+=pixel.letter;
    let rowindex:number;
    let colindex:number;
    // Change position of letter to a pixel that does not already have a pixel
    do{
     colindex = Math.floor(Math.random() * size); 
     rowindex = Math.floor(Math.random() * size); 
    }while (pixels[rowindex][colindex].letter != "")
    
    // Give letter new position
    pixels[rowindex][colindex] = {color:lettercolor,letter:pixel.letter}
    //Reset the pixel that the letter was at before
    pixel.color = color;
    pixel.letter = "";

 }

  </script>
  <svelte:window on:keydown|preventDefault={onKeyDown} />
  <p>USERNAME: {username}</p>
  <main>
    <div class="grid">
      {#each pixels as row, rowIndex}
        <div class="row">
          {#each row as pixel, colIndex}
            {#if rowIndex == snakerow && colIndex == snakecol}
                {#if pixel.letter != ""}
                    {letterCollision(pixel)}
                {/if}
                <div class="pixel"  style="background: {snakecolor}; 
                      width: {pixelsize}px; height: {pixelsize}px;">
                      {Math.abs(coldir)== 1?(coldir==1)?">":"<":rowdir==1?"v":"^"}
                </div>
            {:else}
              <div class="pixel" style="background: {pixel.color}; 
                    width: {pixelsize}px; height: {pixelsize}px;">
                {pixel.letter}
              </div>
            {/if}
          {/each}
        </div>
      {/each}
    </div>
</main>


<style>
main {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  min-height: 100vh;

}

.grid {
  display: grid;
  grid-gap: 0;
  border: #050C48 solid 1px;
  margin-top: 20px;
  background-color: transparent;
}

.row {
  display: flex;
}

.pixel {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80%;
  transition: background 0.1s;
  text-align: center;
}

</style>

