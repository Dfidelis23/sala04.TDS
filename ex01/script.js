function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    //console.log(numero1, numero2)
    var resposta = document.getElementById('resposta').textContent = numero1 + numero2
}

function subtracao(){
    var numero1 = document.getElementById("n3").valueAsNumber
    var numero2 = document.getElementById("n4").valueAsNumber
    //console.log(numero1, numero2)
    var resposta = document.getElementById('sub').textContent = numero1 - numero2
}

function multiplicacao(){
    var numero1 = document.getElementById("n5").valueAsNumber
    var numero2 = document.getElementById("n6").valueAsNumber
    //console.log(numero1, numero2)
    var resposta = document.getElementById('mul').textContent = numero1 * numero2
}

function divisao(){
    var numero1 = document.getElementById("n7").valueAsNumber
    var numero2 = document.getElementById("n8").valueAsNumber
    //console.log(numero1, numero2)
    var resposta = document.getElementById('div').textContent = numero1 / numero2
}

