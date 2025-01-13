<script>

  let cards = []
  for (let i = 0; i < 12; i++) {
    cards.push({
      image: "favicon.png",
      flipped: false,
      matched: false,
    });
  }
  cards[3].image = "long-hair.png";
  cards = cards;
  let blueTurn = false;
  let flipcount = 0;  

  function flip(card){
    if (flipcount < 2 && !card.flipped) {
      card.flipped = true;
      flipcount++;


      if (flipcount === 2) {
        let clickedCards = cards.filter((card) => card.flipped && !card.matched);
        if (clickedCards[0].image === clickedCards[1].image) {
          clickedCards.forEach((card) => {
            card.matched = true;
          });
        }
        setTimeout(() => {
          cards.forEach((card) => {
            card.flipped = card.matched;
          });
          flipcount = 0;
          cards = cards;
        }, 1000);
      }
    }
    cards = cards;
  
  }
</script>





<h1>Memory</h1>
<main>
  {#each cards as card, i}
    <div class="card" class:flipped={card.flipped}
    on:click={() => {
     flip(card)
    }}
    >
     <img src={card.image} alt="card" class="front" />
     <img src="front.webp" alt="card" class="back" />
    </div>
  {/each}
</main>

<aside on:click={()=>blueTurn = !blueTurn}><p>0</p> </aside>
<aside class="blue"><p>0</p></aside>
<aside class:blue={blueTurn} class="turn"></aside>



<style>

.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg)
  }

  .card .front {
    transform: rotateY(180deg);
  }

  
  .card:not(.flipped):hover{
   transform: scale(1.1);
  }



  aside{
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  p{
    font-size: 30px;
  }

  
  .blue{
    background-color: blue;
    left: 10px;
  }

  .turn{
    box-shadow: 0 0 10px 10px yellowgreen;
    z-index: -1;
  }

.card {
    border: 1px solid black;
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.5s;


  }
  .card img {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;

  }

  


    h1{
       text-align: center;
       font-size: larger;
    }
    main{
      grid-gap:10px;
      width:min-content;
      margin: auto;
      display: grid;
      
    }

    @media (min-height: 500px){
      main{
        grid-template-columns: repeat(4, 100px);
        grid-template-rows: repeat(3, 100px);
      }
    }
    @media (max-height: 500px){
      main{
        grid-template-columns: repeat(6, 100px);
        grid-template-rows: repeat(2, 100px);
      }
    }
</style>