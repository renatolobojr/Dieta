    var d=-1;

    function ler_arquivo(){
    fetch('../json/taco4.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });    
    }

    function up(){
        ler_arquivo();
        d++;
    }

    function down(){
        ler_arquivo();
        d--;
        d = (d<0)? 0 : d;
    }

    function appendData(data) {
        var mainContainer = document.getElementById("form");

        var N = document.getElementById("num");     N.value = data[d].Num;
        var G = document.getElementById("grupo");   G.value = data[d].Grupo;
        var A = document.getElementById("alime");   A.value = data[d].Allimento;
        var D = document.getElementById("desc");    D.value = data[d].Descricao;
        var C = document.getElementById("kcal");    C.value = data[d].Calorias;
        var P = document.getElementById("prot");    P.value = data[d].Proteina;
        var L = document.getElementById("gord");    L.value = data[d].Lipideos;        
        var C = document.getElementById("carb");    C.value = data[d].Carboidratos;        
        var F = document.getElementById("fib");     F.value = data[d].Fibras;        
        var S = document.getElementById("sod");     S.value = data[d].Sodio_mg;

    }


