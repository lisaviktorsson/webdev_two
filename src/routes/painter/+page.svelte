<script>
    import { RangeSlider } from '@skeletonlabs/skeleton';
    let color = "#000000";
    let size = 4;

// Predefined list of 24 colors
  const colorList =  [
    '#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF', '#FF33FF',
    '#FF3333', '#33FF33', '#3333FF', '#FF6633', '#33FF66', '#6633FF',
    '#FF3366', '#66FF33', '#3366FF', '#FFCC33', '#33FFCC', '#CC33FF',
    '#FF33CC', '#CCFF33', '#33CCFF', '#999999', '#CCCCCC', '#FF9966'
  ];
    
    let pixels;
    
    function resetPixels(){
        pixels = [];
        let row;
        for(let i = 0; i<size;i++){
            row = []
            for(let j = 0; j<size;j++){
                row.push('#ffffff')
            }
            pixels.push(row)
        }
    }
    resetPixels(size)
  let isDrawing = false;

  function handleMouseDown() {
    isDrawing = true;
  }

  function handleMouseUp() {
    isDrawing = false;
  }

  function setPassword(){ 
    alert("PASSWORD SET")
  }
  function handleMouseOver(row, col) {
    if (isDrawing) {
      pixels[row][col] = color;
      pixels = [...pixels]; // Trigger reactivity
    }
  }

  function handleSave() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions based on the pixel grid size
    canvas.width = pixels[0].length * 20; // Assuming each pixel is 20x20
    canvas.height = pixels.length * 20;

    // Draw pixels on the canvas
    pixels.forEach((row, rowIndex) => {
      row.forEach((color, colIndex) => {
        ctx.fillStyle = color;
        ctx.fillRect(colIndex * 20, rowIndex * 20, 20, 20);
      });
    });

    // Create a data URL representing the image
    const dataURL = canvas.toDataURL();

    // Create a link element and trigger a download
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'pixel_art.png';
    link.click();
  }
    
  </script>
  

  <RangeSlider on:change={() => resetPixels()} name="range-slider" bind:value={size} max={32} step={4} start={4} ticked>Grid size {size}</RangeSlider>
  <main>
        <div>
            <input type="color" id="colorPicker" bind:value={color}>
            <div class="colorPicker">
                {#each colorList as c}
                    <div class="color" style="background-color:{c}" on:click={()=>{color=c}}>
                </div>
                {/each}
                
                
                <div style="width:320px; height: 30px; background-color:{color}; margin-top:15px; border: 10px solid {color}; border-radius:5px;"></div>
            </div>
            <button style=" border-radius: 10px; margin-top:15px; padding: 10px 30px; background-color:midnightblue; color:white;" on:click={handleSave}>Save</button>
            <button style=" border-radius: 10px; margin-top:15px; padding: 10px 30px; background-color:midnightblue; color:white;" on:click={resetPixels}>Reset</button>
            <button style=" border-radius: 10px; margin-top:15px; padding: 10px 15px; background-color:midnightblue; color:white;" on:click={setPassword}>Set password</button>

          </div>

    <div
      class="grid"
      on:mousedown={handleMouseDown}
      on:mouseup={handleMouseUp} >
      {#each pixels as row, rowIndex}
        <div
          class="row"
          on:mousedown={handleMouseDown}
          on:mouseup={handleMouseUp} 
        >
          {#each row as pixel, colIndex}
            <div
              class="pixel"
              style="background: {pixel}"
              on:mouseover={() => handleMouseOver(rowIndex, colIndex)}
              on:focus={()=>handleMouseOver(rowIndex, colIndex)}
            ></div>
          {/each}
        </div>
      {/each}
    </div>
</main>


  <style>


input{
    width: 100px;
    height: 50px;
    background-color:steelblue;
}
.color{
    width: 100%;
    height: 50px;
    border-radius: 10%;

}

.colorPicker{
    display: grid;
    grid-template-columns: 75px 75px 75px 75px;
    grid-gap: 10px;
}

main {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: start;
  min-height: 100vh;
  background-color:steelblue;

}

.grid {
  display: grid;
  grid-gap: 0;
  border: transparent;
  margin-top: 5px;
  width: 600px;
  height: 600px;
  
}

.row {
  display: flex;
}
    .pixel {
      width: 25%;
      height: 100%;
      border: 1px solid black;
      margin: -1px 0 0 -1px;
      display: inline-block;
      transition: background 0.1s;
    }
  </style>