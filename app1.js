let fitness = 2500;
let zumba = 3000;
let strong = 2900;


let modalidad = prompt ("Indica si quieres asisitir solo o en equipo");

if(modalidad == "solo"){
    let disciplina = prompt("Ingresa la clase que te interesa: fitness, zumba o strong");

    while(disciplina != "ESC"){
        switch(disciplina){
            case "fitness" :
                alert( "La clase cuesta " + fitness); 
                break;
            
            case "zumba" :
                alert("La clase cuesta " + zumba);
                break;
    
            case "strong" :
                alert("La clase cuesta " + strong);
                break;
            
            default: 
                alert("Revisa que hayas escrito correctamente el nombre de la clase");
                break;
        }
        disciplina = prompt("Ingresa la clase que te interesa: fitness, zumba o strong");
    }
}

 if(modalidad == "equipo") {
    let disciplina = prompt("Ingresa la clase que te interesa: fitness, zumba o strong");

    while(disciplina != "ESC"){
        switch(disciplina){
            case "fitness" :
                alert( "La clase cuesta " + (fitness+fitness/2));
                break;
            
            case "zumba" :
                alert("La clase cuesta " + (zumba+zumba/2));
                break;
    
            case "strong" :
                alert("La clase cuesta " + (strong+strong/2));
                break;
            
            default: 
                alert("Revisa que hayas escrito correctamente el nombre de la clase");
                break;
        }
        disciplina = prompt("Ingresa la clase que te interesa: fitness, zumba o strong");
    }
}else{
    alert("Revisa que hayas ingresado SOLO o EQUIPO")
 
};