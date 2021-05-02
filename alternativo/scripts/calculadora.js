var sexo = 1; //1 = Masc e 0 = Fem

function calcular(){

var peso = document.getElementById("peso");
var desejo = document.getElementById("desejado");
var altura = document.getElementById("altura");
var idade = document.getElementById("idade");
var sexo = document.getElementsByName("sexo"); 
//sexy é um array, e para ver a opção marcada eu uso sexy[i].checked é true onde i é opção radio

var imc = document.getElementById("imc");
var tmb = document.getElementById("tmb");

var quilo = document.getElementById("meta");
var dia = document.getElementById("dia");
var diet = document.getElementById("dieta");

var tmbm = Math.round(66 + (13.8 * peso.value) + (5 * altura.value) - (6.8 * idade.value)); //masculino
var tmbf = Math.round(655 + (9.6 * peso.value) + (1.8 * altura.value) - (4.7 * idade.value)); //feminino

imc.value = Math.round((peso.value * 100000)/(altura.value*altura.value))/10; 
tmb.value = (sexo[0].checked) ? tmbm : tmbf;
quilo.value = desejo.value - peso.value;
dia.value = "180";

diet.value = tmb.value - (((quilo.value)*-7700)/dia.value); // 1kg de gordura é equivalente a 7700 kcal

console.log("Dias: " + dia.value);
console.log("Dieta: " + diet.value);

}