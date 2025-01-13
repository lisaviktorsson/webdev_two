<script>
  let turn = true;
  let cards = [];
  for (let index = 0; index < 12; index++) {
    cards.push({
      id: 5, // TODO: unique ids per card card
      img: "/notrick.gif", // TODO: unique images per card card
      flipped: false,  // TODO: think
      completed: false,
    });
  }
  let flipcount = 0;
  function flip(card) {
    // flip card over if two cards are not already flipped
    // TODO: and card is already not flipped
    if (card.flipped && flipcount < 2) {
      // TODO: Probably do what?

      // flip the cards over after 2s from seeing both cards
      if (flipcount == 4) {
        setTimeout(() => {
          // flip over cards that have not been marked as "completed"
          cards.forEach((card) => {
            card.flipped = card.completed;
          });
          flipcount = 0;
          cards = cards;
        }, 2000);
      }
      cards = cards;
    } else {
      alert("chill");
    }
  }
</script>

<main>
  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
      >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="front.webp" alt="" />
      </div>
    {/each}
  </div>
  <div id="red-box" class="box" >0</div>
  <div id="blue-box" class="box">0</div>
  <div class="hat" style={turn?"left:60px; transform:rotate(45deg);":"right:60px; transform:rotate(-45deg)"}>
  </div>
 <button on:click={()=>{turn =!turn}} >Change turn</button>
  
</main>

<style>

.box {
  width: 100px;
  height: 100px;
  position: fixed;
  text-align: center;
  font-size: 30px;
}
#red-box, #blue-box{
   bottom: 0px;
   z-index: 2; 
}

#red-box {
    background-color: red;
    right: 0;
  }
#blue-box {
    background-color: blue;
    left: 0;
}


    .hat {
      bottom: 60px;
      position: fixed;
      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-bottom: 100px solid red;
      z-index: 3;
    }

	    .hat::before {
      content: '';
      position: fixed;
      width: 20px;
      height: 20px;
      background-color: whitesmoke;
      border-radius: 50%;
      top: -10px;
      left: calc(50% - 10px);
			
    }
	.hat::after {
      content: '';
      position: fixed;
      width: 100px;
      height: 20px;
      background-color: whitesmoke;
      border-radius: 10px / 20px; /* horizontal radius / vertical radius */
			top:90px;
			left: -50px;
    }




  main {
    margin-top: 50px;
    display: flex;
    place-content: center;
    place-items: center;
  }

  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(3, 100px);
  }

  @media (max-width:800px){
    .row{
      grid-template-columns: repeat(4, 100px);
    }
  }

  @media (max-width:600px){
    .row{
      grid-template-columns: repeat(2, 100px);
      grid-template-rows: repeat(6, 100px);

    }
  }

  .card {
    border: 1px solid black;
    border-radius: 10% 30% 50% 70%;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
    
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
  }
</style>
