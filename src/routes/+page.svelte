
<!--Delar upp sidan i två delar-->
<main>
  <div>
  
    <h1 class="name"> Namn efternamn </h1>

    <h2>Här har jag samlat min uppgifter jag gjort i samband med webbutveckling i årskurs 2 på Maja Beskowgymnasiet!</h2>

    <h3>Inspirerade citat för min webbutvecklingsresa:</h3>
    <p id="inspo">
      "The only way to learn a new programming language is by writing programs in it." - <strong>Dennis Ritchie</strong>, creator of the C programming language.
  </p>
  
  <p style="background-color:pink">
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - <span>Patrick McKenzie, software engineer and entrepreneur</span>.
  </p>

</div>
<!--Här kommer vi lägga till en bild senare i uppgiften 1.2.4 Extra styling-->
     
<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M29.5,-44C37.1,-41,41.4,-30.9,43.5,-21.3C45.7,-11.7,45.8,-2.5,46.6,8.2C47.5,19,49.1,31.5,43.9,38.7C38.7,45.9,26.6,47.8,14.3,53.8C1.9,59.9,-10.8,70,-18.4,66.2C-26,62.4,-28.6,44.7,-40.2,33.5C-51.8,22.4,-72.5,17.9,-75.7,9.6C-78.8,1.3,-64.3,-10.7,-56.1,-24.3C-47.8,-37.9,-45.8,-53,-37.5,-55.7C-29.2,-58.3,-14.6,-48.4,-1.8,-45.6C10.9,-42.7,21.9,-46.9,29.5,-44Z" transform=" translate(100,70)"  />
</svg>

                                       
</main>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,128L17.1,154.7C34.3,181,69,235,103,234.7C137.1,235,171,181,206,160C240,139,274,149,309,138.7C342.9,128,377,96,411,101.3C445.7,107,480,149,514,165.3C548.6,181,583,171,617,170.7C651.4,171,686,181,720,197.3C754.3,213,789,235,823,224C857.1,213,891,171,926,144C960,117,994,107,1029,133.3C1062.9,160,1097,224,1131,218.7C1165.7,213,1200,139,1234,96C1268.6,53,1303,43,1337,80C1371.4,117,1406,203,1423,245.3L1440,288L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path></svg>



<style>
  /*Styling för att dela upp sidan i två delar. */
  /*Vi kommer gå igenom detta i detalj senare*/
  main{
    margin: 0px auto ;
    width: 80vw;
    height: 70vh;
    display: grid;
    grid-template-columns: repeat(2,50%);
    overflow: hidden;
  }
  div{
    margin: auto;
  }

  /*Styling för texten*/
  h1{
      color:grey;
  }
  
  h2{
      color: rgb(255, 165, 0);
  }
  
  h3{
      color: #3cb371;
      font-family: sans-serif;
      font-weight: bold;
  }

  h1, h2, h3{
    margin: 20px;
  }

    #inspo{
    font-family: courier;
    font-size: 20px;
  }

  .name{
    font-family:'Gill Sans';
    font-size: 50px;
  }

  </style>

