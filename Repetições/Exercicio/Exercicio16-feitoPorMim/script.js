
function contar(){

let inicio = document.getElementById("n1")
let fim = document.getElementById("n2")
let passo = document.getElementById("n3")
let res = document.getElementById("res")

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = ("[ERRO] Impossivel contar!")
}else{
    res.innerHTML = ("Contando: <br>")
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if(p <= 0){
        window.alert("[ERRO] Impossivel contar! Considere Passo 1")
        p =  1
    }

    if(i < f){
        let c = i
        while(c <= f){
            res.innerHTML += `${c} \u{1f449}`
            c += p
        }
    }else{
        let c = i
        while(c >= f){
            res.innerHTML += `${c} \u{1f449}`
            c -= p
        }
    }
    res.innerHTML += `\u{1f3c1}`
}
}

