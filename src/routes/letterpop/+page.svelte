<script lang="ts">
  import { ProgressBar } from '@skeletonlabs/skeleton';
  let lettersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  let letters:Array<{letter:String,left:Number,top:Number}> = [];
  
  let checkedletters:Array<String> = [];
  // up = 38
    // down = 40
    // right = 39
    // left = 37
  function onKeyDown(e:any) {
      if((e.keyCode < 65 || e.keyCode > 90)) return;
      letters.push({letter:lettersString[e.keyCode-65],top:10+Math.random()*80,left:10+Math.random()*80});
      if(!checkedletters.includes(lettersString[e.keyCode-65])) 
          checkedletters.push(lettersString[e.keyCode-65]);
  
      checkedletters = checkedletters;
      letters = letters;
      setTimeout(()=>{
          letters = letters.filter((letter)=>letter !== letters[0]);
      },1000);
  }
  $:progress = Math.round(checkedletters.length/lettersString.length*100);
  
  
  </script>
  <svelte:window on:keydown|preventDefault={onKeyDown} />
  
  <ProgressBar label="Progress Bar" value={progress} max={100} />
  {#if progress === 100 && undefined ==alert("You have completed the alphabet!")   }
       <button class="btn" on:click={()=>checkedletters=[]}>Reset</button>
  {:else}
  {#each letters as {letter,top,left}}
      <p class="neonText" style="left:{left}vw;top:{top}vh;">{letter}</p>
  {/each}
  {/if}
  
  
  
  
  
  
  <style>
  
      .neonText {
    color: #fff;
    text-shadow:
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 42px #0fa,
        0 0 82px #0fa,
        0 0 92px #0fa,
        0 0 102px #0fa,
        0 0 151px #0fa;
  }
  
  
      p{
          position:fixed;
          font-size:100px;
          color:white;
          animation: pop 1000ms linear;
  
      }
      
      @keyframes pop{
          0%  {opacity: 30%;
               transform: scale(0.1);   }
          90%  {opacity: 100%;
              transform: scale(1);   }
          100%  {opacity: 0%;
               transform: scale(0.2);   }
      }
     
  </style>