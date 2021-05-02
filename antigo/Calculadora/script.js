/*function verificar()
{
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.getElementById('res');
    if (fano.value.length == 0 || Number(fano.value)>= ano)
    {
        window.alert('Verifique os Dados');
    }
    else
    {
        var fsex= document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        if (fsex[0].checked){
            genero = 'homem';
            if(idade >=0 && idade <10){
                img.setAttribute('src','foto-bebe-m.png')
            }
            if(idade <21){
                img.setAttribute('src','foto-adulto-m.png')
            }
            if( idade <50){
                img.setAttribute('src','foto-idoso-m.png')
            }
        }
        else (fsex[1].checked)
        {
            genero = 'mulher';
            if(idade >=0 && idade <10)
            {
                img.setAttribute('src','foto-bebe-f.png')
            }else if(idade<=21){
                img.setAttribute('src','foto-adulto-f.png')
            }else if(idade <50){
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
       
        res.innerHTML = (`${genero} de ${idade}`);
        res.style.textAlign='center';
        res.appendChild(img);
    }

}*/
function calcular ()
{
var res = window.document.getElementById('res');
var tidade = window.document.getElementById('txtidade');
var idade = Number(tidade.value);
var tpeso = window.document.getElementById('txtpeso');
var peso = Number(tpeso.value);
var taltura = window.document.getElementById('txtaltura');
var altura = Number(taltura.value);
var fsex= document.getElementsByName('radsex');
var fact= document.getElementsByName('radact');
var act = 0.00;
var fres = 0.00;
if(fact[0].checked)
{
    act = 1;
}else if(fact[1].checked)
{
    act = 1.4;
}else if(fact[2].checked)
{
    act = 1.6;
}else if(fact[3].checked)
{
    act = 1.9;
}

if(fsex[0].checked)
{
fres = 662-9.53*idade+act*(15.91*peso)+539.6*altura/100;
}
else if (fsex[1].checked)
{
fres = (354-6.91*idade) + (act*(9.36*peso)+(726*altura/100));
}

res.innerHTML =(`${fres} kcal ${idade} anos ${altura} cm ${peso} FA${act}`);


}