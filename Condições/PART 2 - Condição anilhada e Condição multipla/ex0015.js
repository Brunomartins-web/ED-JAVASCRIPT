var hora = new Date().getHours();
var ano = new Date().getFullYear();
var data = new Date();
console.log(`Agora são exatamente ${hora} horas, do Dia ${data.getDate()} do mês ${data.getMonth() + 1}, do ano de ${ano}.`);
if (hora >= 6 && hora < 12) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Boa madrugada!'); // Captura o período entre 0h e 5h
}