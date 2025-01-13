<script>

	let lettersString = "ABCDEF".split("");
	let letters = [];
	let username = "";
	import { onMount } from "svelte";
	let interval;
	onMount(()=>{
		for (let l of lettersString){
			letters.push({ani:false,letter:l,top:(Math.random()*100).toString(), left:(Math.random()*100).toString()})
		}
		letters = letters
		interval = setInterval(()=>{
			letters = [];
			for (let l of lettersString){
				letters.push({ani:false,letter:l,top:(Math.random()*100).toString(), left:(Math.random()*100).toString()})
			}
		},2000)
	})
	function addLetter(letter,i){
		letters[i].ani = false;
		letters = letters;
		username+= letter;
		let tempLeft;
		let tempTop;
		let turns = 200;
		do {
			turns--;
			tempLeft = (Math.random()*100).toString();
			tempTop = (Math.random()*100).toString();
		}while(turns>0 && letters.filter(value => Math.abs(value.top -tempTop)<10).length>0 && letters.filter(value => Math.abs(value.left -tempLeft)<10).length>0 )
		if(turns>0){
			letters[i].left = tempLeft
			letters[i].top = tempTop;
			console.log("here")
		}
		letters[i].ani = true
		letters = letters;
		setTimeout(()=>{
			letters[i].ani = false;
		
			letters = letters;
		},1000)
	}
	
	</script>
	
	<h1>Logga in som <u>{username}</u></h1>
	<main>
		{#each letters as {ani,letter,top,left},i}
			<button class:letter_ani={ani} on:click={addLetter(letter,i)} style="position:sticky; top:{top}%; left:{left}%">{letter}</button>
		{/each}
	
	</main>
	
	
	<style>
	
	main{
		width: 700px;
		height: 500px;
		background-color: whitesmoke;
		margin: auto;
	}
	
	button{
		background-color: brown;
		width: 30px;
		height: 30px;
		border: solid whitesmoke;
		border-radius: 5px;
		padding: auto;
	
		
	}
	
	button:hover{
		background-color: burlywood;
		transform: scale(1.1);
	}
	
	@keyframes letterkey {
		0% {opacity: 30%;transform: scale(0.5);}
		50% { opacity: 70%; transform: scale(0.75);}
		100% { opacity: 100%; transform: scale(1);}
	}
	
	.letter_ani{
		animation: letterkey 250ms linear 0ms ;
		animation-iteration-count:initial;
	}
	
	</style>