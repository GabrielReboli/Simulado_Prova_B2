//2) Inverter uma string
function reverterString() {
    var string = prompt('Insira a string aqui')
    alert(string.split("").reverse().join(""));
}


//8) Verificar se uma string é um palíndromo
function checagemPalindromo() {
    var string = prompt('Insira a string aqui para verificar se ela é um palíndromo')
    var invertido = (string.split("").reverse().join(""));

    if(invertido == string){
        alert('Sim, é um palíndromo')
    }else{
        alert('Não é um palíndromo')
    }
}


//11) Converter temperatura
function converterTemperatura(){
    var celsius = prompt('Insira aqui a temperatura em Graus Ceulsius!')
    var fahrenheit = ((celsius * 9/5) + 32)

    alert('A temperatura convertida é de ' + fahrenheit + ' graus fahrenheit ')
}


//12) Verificar se um número é um quadrado perfeito
function quadradoPerfeito(){
    var numero = parseFloat(prompt('Insira aqui o numero que deseja verificar'))
    var quadrado = Math.sqrt(numero)
    var perfeito = Number.isInteger(quadrado)

    if(perfeito == true){
        alert('Sim, é um quadrado perfeito!')
    }else{
        alert('Não é um quadrado perfeito')
    }

    
}


//15) Geração de cores aleatórias
function gerarCor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    
    alert(`O padrão rgb é: (${red}, ${green}, ${blue})`);

  }