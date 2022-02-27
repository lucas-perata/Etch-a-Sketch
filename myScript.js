// Loop para crear todos los DIVS en el HTML. 

for (i = 0; i<256 ; i++){
    const  container = document.getElementById("grid"); // Div Padre. 

    const div = document.createElement("div"); // Crear divs     
    div.style.background = "grey"; 

    div.style.border = "solid"    
    container.appendChild(div);     // Introducir divs en #GRID  

    // Estilo 
    container.style.gridTemplateColumns = "repeat(4, 1fr )"; 
    container.style.gridTemplateRows = "repeat(64, 50px)"; 

}

