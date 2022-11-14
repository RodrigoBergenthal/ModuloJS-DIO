/*
1- crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilometro rodado.
Crie um metodo que dado a quantidade de quilometros e o preço do combustivel nos de o valor gasto em reais para realizar este percurso.
*/

class carros {
    marca;
    cor;
    gastoKM;
}

const corsa = new carros('Corsa', 'preto', 15);
const palio = new carros('palio', 'branco', 20);

console.log(corsa)