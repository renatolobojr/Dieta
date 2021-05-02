function calcular() {

    const peso = document.getElementById("peso");
    const altura = document.getElementById("altura");
    const idade = document.getElementById("idade");
    const sexo = document.getElementsByName("sexo");
    //sexy é um array, e para ver a opção marcada eu uso sexy[i].checked é true onde i é opção radio    
    const desejo = document.getElementById("desejado"); 
    const dataf = document.getElementById("data");

    const imc = document.getElementById("imc");
    const tmb = document.getElementById("tmb");

    const quilo = document.getElementById("meta");
    const dia = document.getElementById("dia");
    const diet = document.getElementById("dieta");

    var tmbm = Math.round(66 + (13.8 * peso.value) + (5 * altura.value) - (6.8 * idade.value)); //masculino
    var tmbf = Math.round(655 + (9.6 * peso.value) + (1.8 * altura.value) - (4.7 * idade.value)); //feminino

    imc.value = Math.round((peso.value * 100000) / (altura.value * altura.value)) / 10;
    tmb.value = (sexo[0].checked) ? tmbm : tmbf;
    quilo.value = desejo.value - peso.value;

    const hoje = new Date();
    const futuro = new Date(dataf.value);
    dia.value = Math.ceil((futuro.getTime()-hoje.getTime())/(1000*60*60*24)); //.ceil é outro tipo de round

    diet.value = tmb.value - (((quilo.value) * -7700) / dia.value); // 1kg de gordura é equivalente a 7700 kcal


}