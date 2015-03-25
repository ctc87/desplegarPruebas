var contador = 0;
function cambiarColor() {
    contador++;
    var divFuera = document.getElementsByClassName("divExterno");
    var divDentro = document.getElementsByClassName("divInterno");
    
    if(!divFuera[0].style.backgroundColor)
     divFuera[0].style.backgroundColor = "red";
    else if(divFuera[0].style.backgroundColor == "red")
     divFuera[0].style.backgroundColor = "blue";
    else 
     divFuera[0].style.backgroundColor = "red";
    
    if(!divDentro[0].style.backgroundColor)
     divDentro[0].style.backgroundColor = "blue";
    else if(divDentro[1].style.backgroundColor == "blue")
     divDentro[0].style.backgroundColor = "red";
    else 
     divDentro[0].style.backgroundColor = "blue";
    
    if(!divDentro[1].style.backgroundColor)
     divDentro[1].style.backgroundColor = "blue";
    else if(divDentro[1].style.backgroundColor == "blue")
     divDentro[1].style.backgroundColor = "red";
    else 
     divDentro[1].style.backgroundColor = "blue";
    
    var str;
   
    if(divDentro[0].firstChild.nodeValue) {
      str = "Numero de cambios: " + contador;
      divDentro[0].firstChild.nodeValue=str;
    }
    else {
      str = document.createTextNode("Numero de cambios: " + contador);
      divDentro[0].appendChild(str);
    }
    
}

function epilepsia() {
 setInterval('cambiarColor()',10);
}