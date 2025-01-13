<script>
    import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

					
    let clicked = false;
	let korgen = [];
    let Vara;			

    let varor = [{height:90,diameter:20,info:"Café au Lait",stars:5,price:55,img:"https://www.blomsterlandet.se/globalassets/catalog-images/7/148853/d9468c70eb997d4e58b20b0825b2ec8e.jpg"},{height:20,diameter:10,info:"Kick Off",stars:2,price:34,img:"https://zetas.se/cdn/shop/files/Dahlia_KickOff.webp?v=1700724869"},{height:20,diameter:10,info:"Pink Magic",stars:3,price:44,img:"https://www.klostra.se/media/catalog/product/cache/6f6cffc6f1e4520e88baf30530e28156/p/i/pink_magic.jpg"},{height:20,diameter:10,info:"Orange king",stars:4,price:50,img:"https://dahliasbylinn.com/cdn/shop/files/CB5E20D1-AA4F-4D10-97A6-EAE1C4EFE4AA.jpg?v=1693820701&width=1445"}]
    let nrStars = 2;
    let maxPrice = 60;
    let price = 50;
    let varukorg = false;
    let total = 0;
    function addCart(vara){
        korgen.push(vara);
        korgen = korgen;
    }

    $: total = korgen.reduce((acc, curr) => acc + curr.price, 0);

</script>



  
<section class="varukorg" >
    {#if varukorg}


<div class="w-full max-w-md p-4 bg-blue-100 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Varukorg</h5>
       
   </div>
   <div class="flow-root" style="margin-bottom: 15px;">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            {#each korgen as vara}
                <li class="py-3 sm:py-4">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="w-8 h-8 rounded-full" src={vara.img} alt="Product image">
                        </div>
                        <div class="flex-1 min-w-0 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {vara.info}
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                {vara.price}.00 kr 
                            </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <button class="text-gray-500 dark:text-gray-400" on:click={()=>korgen = korgen.filter(value=>value!=vara)}>Ta bort</button>
                        </div>
                    </div>
                </li>
            {/each}

        </ul>
        <hr style="padding: 5px 0px;">
        <h6 class="text-l font-bold leading-none text-gray-900 dark:text-white">Totalt: {total}.00 kr </h6>
   </div>
   <a style="margin-top:25px;" on:keypress={()=>alert("Går till kassan...")} on:click={()=>alert("Går till kassan")} href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Gå till kassan.</a>
</div>

{:else}

<button class="korg" on:click={()=>varukorg=!varukorg} >
    <img src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="korg">
</button>
{/if}
</section>



<main on:click={()=>varukorg=false} on:keydown={()=>varukorg=false}>

<div style="width:90vw; height:fit-content;">
<h2 class="text-4xl font-extrabold dark:text-white">Dahlior</h2>
<p class="my-4 text-lg text-gray-500">Vårbeställnig av dahlior. Beställnigar skickas i mitten av Mars.</p>
<p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Sedan 2002 har vi köpt dahliaknölar med odlarkvalitet från Nederländerna som vi påsar själva. På så sätt har vi den högsta kvalitén till det lägsta priset! Knölarnas kvalité ger de bästa möjliga förutsättningar till ett lyckat odlingsresultat.

    Dahlior är vackra, prisvärda och lättskötta. Dessutom blommar de länge - oftast från mitten eller slutet av juli tills första frosten. Därför borde alla med egen trädgård, eller balkong med plats för kruka, pryda dem med några dahlior!
    
    Beställ dina dahliaknölar hos oss. Våra knölar säljs styckvis. Vi har utfört vår webbutik så att de som lägger beställning först på hösten har störst chans att få alla sorter som de bokar.</p>
<a href="#" class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
Läs mer om hur du planterar dahlior.
<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</a>
</div>

<div class="shop">
<div class="properties">
    <ListBox multiple={false} active='variant-filled'>
        <h3>Antal stjärnor</h3>
        {#each new Array(5) as _,i}
            <div>
                <ListBoxItem on:click={()=>nrStars=i+1} bind:group={nrStars} name="stars" value={i + 1}>{i + 1}</ListBoxItem>
            </div>
            {/each}
    </ListBox>
    <div class="flex items-center space-x-2">
        <label for="price">Pris:</label>
        <input type="range" bind:value={price} id="price" name="price" min="0" max={maxPrice} step="1" >
        <output for="price">{price}</output>           
    </div>
</div>
<div class="varor">  
{#each varor.filter(value=>value.price<=price && value.stars >=nrStars) as vara}

    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#" on:click={()=>{clicked = true; Vara = vara;}}>
            <img class="p-8 rounded-t-lg" src={vara.img} alt="product image" />
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{vara.info}</h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                    {#each Array(vara.stars) as star}
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                    {/each}
                    {#each Array(5-vara.stars) as star}
                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    {/each}
                </div>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">{vara.price}.00 kr</span>
                <a  on:keypress={()=>addCart(vara)} on:click={()=>addCart(vara)} href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lägg i varukorg</a>
            </div>
        </div>
    </div>


{/each}

</div>
</div>
</main>

<div>


</div>

{#if clicked}
<div class="pop">
  <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center" >
        
        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" on:click={()=> clicked = false}>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    </div>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Vara.info}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400"> <b>Höjd</b>: {Vara.height} </p>
    <p class="font-normal text-gray-700 dark:text-gray-400"> <b>Diameter</b>: {Vara.diameter} </p>
    </a></div>
{/if}

    

<style>

    .pop{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        width: 400px;
    }

.varukorg{
    position: absolute;
    top: 50px;
    right: 0;
    width: 30%;
    height: 100%;
}



.korg{
    position: absolute;
    top: 0px;
    right: 0;
    width: 70px;
    height: 50px;
    border-radius: 15px;
    padding:2px;
     background-color: #707a8c; 
     border:2px solid black;
}

.korg img{
    width: 90%;
    height: 90%;
    object-fit: cover;
}

    .shop{
        display:grid;
        grid-template-columns: 1fr 4fr;
    }

.properties{
    flex-direction: column;
    display: flex;
    padding: 1rem;
    margin: 1rem;
}

main{
    padding: 1rem;
    margin: 1rem;
}

.varor{
    overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
}

.shop img{
    width: 100%;
    height: 70%;
    object-fit: cover;
 
}
</style>