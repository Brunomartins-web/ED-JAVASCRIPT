function carregar (){
    let msg = document.getElementById("msg");
    let img = document.getElementById("imagem");

    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    msg.innerHTML = `AGORA SÃO ${hora}:${minuto}H`;
    if(hora >= 0 && hora <12){
        //BOM DIA
        img.src = 'Imagem-dia.png';
        document.body.style.background = '#f3c154ff';
    } else if (hora >=12 && hora <18){
        //BOA TARDE
        img.src = 'Imagem-tarde.png';
        document.body.style.background = '#e7512bff';
    }else {
        //BOA NOITE
        img.src = 'Imagem-noite.png';
        document.body.style.background = '#1b0749ff';
    }
}

