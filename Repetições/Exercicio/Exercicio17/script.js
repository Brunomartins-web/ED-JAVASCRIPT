
function contar(){

let txtn = document.getElementById("txtn")
let res = document.getElementById("res")
    
let num = Number(txtn.value)

if ( num == ""){
    window.alert("[ERRO] Falta Dados")
}else{
    res.innerHTML =  `Calculando a tabuada: <br>`

    for(let c = 0; c <= 10; c++){
        res.innerHTML += `${num} x ${c} = ${num * c} <br>`
    }

}

}
