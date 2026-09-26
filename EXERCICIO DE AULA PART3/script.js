function verificar(){

    let data = new Date()
    let ano = data.getFullYear()
    let formAno = document.getElementById("txtano")
    let res = document.getElementById("res")

    if (formAno.value.length == 0 || formAno.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else{
        let formSex = document.getElementsByName("radsex")
        let idade = ano - Number(formAno.value);
        
        let genero = ""

        let img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (formSex[0].checked){
            genero = "Homem"
            if( idade >=0 && idade < 10){
                //criança
                img.setAttribute("src", "Bebe-homem.png")
                genero = "Uma Criança"
            } else if (idade < 21){
                //Jovem
                img.setAttribute("src", "Menino-adolecente.png")
            } else if (idade < 50){
                //Adulto
                img.setAttribute("src","Homem.png")
            } else if (idade < 70 && idade >=100){
                //idoso
                img.setAttribute("src","Homem-velho.png")
            } else{
                //esqueleto
                img.setAttribute("src","esqueleto.png")
                document.body.style.background = "black"
            }
        } else if (formSex [1].checked){
            genero = "Mulher"
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos Um ${genero} com ${idade} anos`;
        res.style.fontSize = "25px"
        res.style.fontWeight = "500"

        img.style.width = "min(400px, 70vw)"
        img.style.borderRadius = "50%"
        img.style.height = "auto"
        img.style.marginTop = "15px"
        res.appendChild(img)
    }


}