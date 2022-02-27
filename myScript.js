// Loop para crear todos los DIVS en el HTML. 

const  container = document.getElementById("grid"); // Padre

// 16*16  GRID 

const button16 = document.querySelector(".grid16");

button16.addEventListener("click", grid16); 

function grid16 (){

    
    for (i = 0; i<256 ; i++){

        const div = document.createElement("div"); // Crear divs     
        div.setAttribute("id", "grid1")
        container.appendChild(div);     // Introducir divs en #GRID  
    
        // Estilo 
        container.style.gridTemplateColumns = "repeat(16, 1fr )"; 
        container.style.gridTemplateRows = "repeat(64, 50px)"; 
      

    }
    
}


// 10*10 

const button10 = document.querySelector(".grid10");

button10.addEventListener("click", grid10); 

function grid10 (){

    
    for (i = 0; i<100 ; i++){

        const div = document.createElement("div"); // Crear divs     
        
        container.appendChild(div);     // Introducir divs en #GRID  
        div.setAttribute("id", "grid1")
        // Estilo 
        container.style.gridTemplateColumns = "repeat(10, 1fr )"; 
        container.style.gridTemplateRows = "repeat(10, 50px)"; 
    
    }

}




// Boton limpiar

const clean = document.querySelector(".clear")

clean.addEventListener("click", limpiar); 

function limpiar(){
    console.log("limpio"); 

    const gridLimpio = document.querySelectorAll("#grid1").forEach( gridLimpio => gridLimpio.setAttribute("class", "normal"))

    eleccionG()
}

// Eleccion del grid


function eleccionG(){

    const eleccion = window.prompt("10 o 16"); 

    if (eleccion == 16){
        for (i = 0; i<256 ; i++){

            const div = document.createElement("div"); // Crear divs     
            div.setAttribute("id", "grid1")
            container.appendChild(div);     // Introducir divs en #GRID  
        
            // Estilo 
            container.style.gridTemplateColumns = "repeat(16, 1fr )"; 
            container.style.gridTemplateRows = "repeat(64, 50px)"; 
          // Mouse event - pintar 


        const grid1 = document.querySelectorAll("#grid1").forEach(grid1 => grid1.addEventListener("click" , cambios) ) 

        function cambios(){
        this.setAttribute("class", "black")
    
        }
        
    }
}

    else {
        for (i = 0; i<100 ; i++){

            const div = document.createElement("div"); // Crear divs     
            div.setAttribute("id", "grid1")
            container.appendChild(div);     // Introducir divs en #GRID  
        
            // Estilo 
            container.style.gridTemplateColumns = "repeat(10, 1fr )"; 
            container.style.gridTemplateRows = "repeat(10, 50px)"; 
            
            // Mouse event - pintar 


        const grid1 = document.querySelectorAll("#grid1").forEach(grid1 => grid1.addEventListener("click" , cambios) ) 

        function cambios(){
        this.setAttribute("class", "black")
}   
        }
    }
}


