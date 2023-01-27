const button = document.getElementById("botonId1");
const button2 = document.getElementById("botonId2");
const button3 = document.getElementById("copiarBoton");
const txtCuadro = document.getElementById("textoInsertado");
const muneco =  document.getElementById("muneco");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const textoInsertado = document.getElementById("textoInsertado");
const copiarBoton = document.getElementById("copiarBoton");
const p3 = document.getElementById("p3");

function ocultar(elemento){
    elemento.setAttribute("style","display:none;");
};

function mostrar(elemento){
    elemento.setAttribute("style","display:initial;");
};

function encriptar(){
    ocultar(muneco);
    ocultar(p1);
    ocultar(p2);
    
    const textareaValue = document.getElementById("txt");
    const rpta = textareaValue.value;

    if(rpta.match(/^[a-z]+$/)){
        mostrar(textoInsertado);
        mostrar(copiarBoton);
        ocultar(p3);
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
    }else{
        console.log("mayusculas");
        mostrar(p3);
        ocultar(copiarBoton);
        ocultar(textoInsertado);
    }       
}

function desencriptar(){
    ocultar(muneco);
    ocultar(p1);
    ocultar(p2);
    
    const textareaValue = document.getElementById("txt");
    const rpta = textareaValue.value;

    if(rpta.match(/^[a-z]+$/)){
        mostrar(textoInsertado);
        mostrar(copiarBoton);
        ocultar(p3);
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
    }else{
        console.log("mayusculas");
        mostrar(p3);
        ocultar(copiarBoton);
        ocultar(textoInsertado);
    }    
}

button.addEventListener("click",encriptar);
button2.addEventListener("click",desencriptar);

button3.addEventListener("click",function(){
    const textareaValue = document.getElementById("textoInsertado");
    textareaValue.select();
    document.execCommand("copy");
});