
function contar(){

let inicio = document.getElementById("n1")
let fim = document.getElementById("n2")
let passo = document.getElementById("n3")
let res = document.getElementById("res")

 if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = ("[ERRO] Impossivel Contar!")
    // window.alert("[ERRO] Faltam dados!")
} else{
    res.innerHTML = "Contando: <br>"
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if(p<=0){
        window.alert("[ERRO] Passo Invalido, Considerando Passo 1")
        p = 1
    }


    if(i < f){
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1f449}`
        }
    }else{
        for(let c = i; c >= f; c-= p){
            res.innerHTML += `${c} \u{1f449}`
        }
    }

    res.innerHTML += `\u{1f3c1}`
}

}