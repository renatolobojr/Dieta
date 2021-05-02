



function calcular(){

let peso = 85;
let peso_desejado = 75;
let altura = 166;
let idade = 34;
let sexo = true; //true = M e false = F

let dias = 140;
let quilos = peso_desejado - peso;

let imc = (peso * 10000)/(altura*altura); 
console.log("IMC:" + imc);

let tmbm = 66 + (13.8 * peso) + (5 * altura) - (6.8 * idade); //masculino
let tmbf = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade); //feminino
let tmb = (sexo) ? tmbm : tmbf;

console.log("TMB: "+ tmb );

let dieta = tmb + ((quilos*7700)/dias); // 1kg de gordura é equivalente a 7700 kcal

console.log("Dieta: " + dieta);

}