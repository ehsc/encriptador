const button = document.getElementById("botonId1");
const button2 = document.getElementById("botonId2");
const button3 = document.getElementById("copiarBoton");
const txtCuadro = document.getElementById("textoInsertado");
const muneco =  document.getElementById("muneco");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const textoInsertado = document.getElementById("textoInsertado");
const copiarBoton = document.getElementById("copiarBoton");

function ocultar(elemento){
    elemento.setAttribute("style","display:none;");
};

function mostrar(elemento){
    elemento.setAttribute("style","display:initial;");
};

button.addEventListener("click", function(){
    ocultar(muneco);
    ocultar(p1);
    ocultar(p2);
    mostrar(textoInsertado);
    mostrar(copiarBoton);
    const textareaValue = document.getElementById("txt");
    const rpta = textareaValue.value;
    var rptatxt = rpta.replace(/a|e|i|o|u/g, function coincidencia(x){
        if(x === "a"){
            return "ai";
        }else if(x === "e"){
            return "enter";
        }else if(x === "i"){
            return "imes";
        }else if(x === "o"){
            return "ober";
        }else if(x === "u"){
            return "ufat";
        }
    });
    txtCuadro.innerHTML = rptatxt;
});

button2.addEventListener("click", function(){
    ocultar(muneco);
    ocultar(p1);
    ocultar(p2);
    mostrar(textoInsertado);
    mostrar(copiarBoton);
    const textareaValue = document.getElementById("txt");
    const rpta = textareaValue.value;
    var rptatxt = rpta.replace(/ai|enter|imes|ober|ufat/g, function coincidencia(x){
        if(x === "ai"){
            return "a";
        }else if(x === "enter"){
            return "e";
        }else if(x === "imes"){
            return "i";
        }else if(x === "ober"){
            return "o";
        }else if(x === "ufat"){
            return "u";
        }
    });
    txtCuadro.innerHTML = rptatxt;
});

button3.addEventListener("click",function(){
    const textareaValue = document.getElementById("textoInsertado");
    textareaValue.select();
    document.execCommand("copy");
});