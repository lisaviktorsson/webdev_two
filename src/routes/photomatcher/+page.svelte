<script>
    let imgs = []
    for(let i = 0;i<3;i++)
        for(let j = 0;j<3;j++)
            imgs.push({left:-j*200,top:-i*200,white:false})

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }   
}

//shuffleArray(imgs)
imgs[8].white = true
let index = 8;
console.log(imgs)


let win = false;
function checkBoard(){
    let k =0;
    let nr_correct = 0;
    for(let i = 0;i<3;i++)
        for(let j = 0;j<3;j++){
           
            if(imgs[k].left == -j*200 && imgs[k].top == -i*200 ){
                nr_correct++;
            }
            k++;
        }
    if(nr_correct==9)
        win = true
        clearInterval(interval);
}

let interval = setInterval(checkBoard,4000)


</script>

<p>{win}</p>
<div class="game">
    {#each imgs as {left,top,white},i}
    <div class="puzzle" on:click={()=>{
        if(( Math.abs(index-i)==1 || (index-i)%3==0 )&& !win){
            let ttop = imgs[index].top
            let tleft = imgs[index].left
            imgs[index].top = imgs[i].top
            imgs[index].left = imgs[i].left
            imgs[index].white = false
            imgs[i] = {left:tleft,ttop:ttop,white:true} 
            imgs = imgs;
            index = i;
        }
    }} on:keypress={()=>{}}>
        {#if !white}
            <img class="image"style="left:{left}px; top:{top}px;" alt="img" src=https://picsum.photos/seed/picsum/600/600>
        {/if}

    </div>
    {/each}

</div>


<style>

    .game{
        position: relative;
        margin:auto;
        display: grid;
        grid-template-columns: repeat(3,200px);
        overflow: hidden;
        width: 600px;
        height: 600px;
    }

    .puzzle{
        border: 1px solid white;
        position: relative;
        width: 200px;
        height: 200px;
        overflow: hidden;
        

    }

    .image{
        max-width: 600px;
        width: 600px;
        height: 600px;
        position: absolute;
    }

</style>