
// padrão das funções em js =  const soma = function (v1, v2){return v1+v2}

// arrow functions usam uma conotação que lembra uma setinha
            //vai passar os parametros para dentro da função
function calcularIMC(peso, altura) => {
    // Convertendo altura de metros para centímetros
    var alturaEmCm = altura * 100;

    // Calculando o IMC (peso / altura^2)
    var imc = peso / (alturaEmCm * alturaEmCm);

    // Arredondando o resultado para duas casas decimais
    imc = parseFloat(imc.toFixed(2));

    return imc;
}

// usando a função
var peso = 70; // em quilogramas
var altura = 1.75; // em metros

var resultadoIMC = calcularIMC(peso, altura);

console.log("O seu IMC é: " + resultadoIMC);
