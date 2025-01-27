<script>
    import { onMount } from "svelte";

    let lettersString = "ABCDEFGHIJKLMNOPQRSTVWXYZ<".split("")
    let letters = [];
    let username = "";


    // max %
    let maxWidth = 95;
    let maxHeight = 90;

    function randomizeLetter(letter){
        let tempLeft;
        let tempTop;
        let leftRad;
        let topRad;
        let i = 0;

        //random left
        tempLeft = maxWidth*Math.random()
        // Find all letters within 5% radius of left
        leftRad = letters.filter((value)=> Math.abs(value.left-tempLeft)<10)
        // Try for 10 iterations to get unique position
        do{
            i++
            tempTop = maxHeight*Math.random() 
            // Find alla letters from leftRad which is also within 5% radius of top 
            topRad = leftRad.filter((value)=> Math.abs(value.top-tempTop)<5)
        
        } while(topRad.length>0 && i<10)

        return {letter:letter,top:tempTop,left:tempLeft,ani:false}
    }


    function randomizeLetters(){
        letters = [];
        for(let letter of lettersString){
            letters.push(randomizeLetter(letter))
        }
    }
    

    // När sidan laddats in, skapa bokstäverna och starta intervallet
    onMount(()=>{
        randomizeLetters()
        console.log(letters)
        //Update all positions every 3s
        setInterval(()=>{
            randomizeLetters()
        },3000)
    })
    

    

    function addLetter(letter,i){
        // remove last letter
        if(letter === "<"){
            username = username.substring(0,username.length-1)
            return
        }
        username += letter;
        letters[i] = randomizeLetter(letter)
        // animation on move
        letters[i].ani = true;
        letters = letters;
        //set to false to trigger animation on next move
        setTimeout(()=>{letters[i].ani = false},1000)

    }

</script>

<button class ="login" on:click={()=>{alert(username!=""?"logged in as "+username:"Enter username!")}}>Logga in som {username}</button>

<div class="container">
    {#each letters as {letter,top,left,ani},i}
        <button class:ani={ani} on:click={()=>addLetter(letter,i)} 
                style="top:{top}%; left:{left}%;">
            {letter}
        </button>
    {/each}
</div>

<style>

    .login{
        background-color: red;

    }
    .container{
        border: 2px solid blanchedalmond;
        width: 700px;
        height: 500px;
        margin: auto;
        position: relative;
    }
    button{
        background-color: beige;
        border: 1px solid brown;
        border-radius: 5px;
        padding: 1px 2px;
        position: absolute;
    }
    @keyframes fader{
        0% {opacity: 30%; transform: scale(0.25);}
        50% {opacity: 70%; transform: scale(0.75);}
        100% {opacity: 100%; transform: scale(1);}
    }
    .ani{
        animation: fader 500ms linear;
        animation-iteration-count: initial;
    }
</style>