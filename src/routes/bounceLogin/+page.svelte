<script>

    let username = "";
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-_."

</script>



<div>
<h1>Enter username: {username}</h1>
<button on:click={()=>{username = ""}}>Reset</button>

<h1 aria-label="bouncing">
    {#each letters as letter,i}
        <span style="--i: {i+1}" aria-hidden="true"><span on:keypress={()=>{username+=letter}} on:click={()=>{username+=letter}} >{letter}</span></span>
     {/each}
</h1>


</div>
<button style="width:fit-content;">Login</button>



<style>
* {
  box-sizing: border-box;
}

div{
  --hue: 60;
  font-family: Montserrat, sans-serif;
  margin: 10px;
  padding: 1rem;
  min-height: 80vh;
  display: grid;
  place-items: center;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 5rem);
  display: flex;
}

span {
  --stagger: -200ms;
  --delay: calc(var(--i) * var(--stagger, 200ms));
}

span > span {
  display: block;
  animation: bounce 2000ms var(--delay, 0ms) infinite;
  transform-origin: center bottom;
  z-index: 1;
}

span:not(span > span)::after {
  content: '';
  display: block;
  width: 100%;
  aspect-ratio: 1;
  background: hsl(var(--hue) 50% 45% / 0.1);
  transform: translate3d(0, 3.8em, 0) scaleY(0.3) scaleX(0.8);
  transform-origin: center top;
  border-radius: 100%;
  filter: blur(0.08em);
  animation: shadow 2000ms var(--delay, 0ms) infinite;
}

@keyframes bounce {
  0% {
    transform: translate3d(0, 0, 0) rotateY(0deg) scaleY(1);
    animation-timing-function: ease-in;
  }
  45% {
    transform: translate3d(0, 4em, 0) rotateY(180deg) scaleY(1);
    animation-timing-function: ease-in;
  }
  50% {
    transform: translate3d(0, 4em, 0) rotateY(180deg) scaleY(0.2);
    animation-timing-function: ease-out, ease-out, linear;
  }
  100% {
    transform: translate3d(0, 0, 0) rotateY(0) scaleY(1);
    animation-timing-function: ease-out;
  }
}

@keyframes shadow {
  0% {
    transform: translate3d(0, 3.8em, 0) scale3d(1.5, 0.3, 1);
    opacity: 0;
    animation-timing-function: ease-in;
  }
  45% {
    transform: translate3d(0, 3.8em, 0) scale3d(0.8, 0.2, 1);
    opacity: 1;
    animation-timing-function: ease-in;
  }
  50% {
    transform: translate3d(0, 3.8em, 0) scale3d(0.8, 0.2, 1);
    opacity: 1;
    animation-timing-function: linear;
  }
  100% {
    transform: translate3d(0, 3.8em, 0) scale3d(1.5, 0.3, 1);
    opacity: 0;
    animation-timing-function: ease-out;
  }
}

</style>  