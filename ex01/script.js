function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById('resposta').textContent = numero1 + numero2
}

function subtracao(){
    var numero1 = document.getElementById("n3").valueAsNumber
    var numero2 = document.getElementById("n4").valueAsNumber
    var resposta = document.getElementById('sub').textContent = numero1 - numero2
}

function multiplicacao(){
    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value)
    var resposta = document.getElementById('mul').textContent = numero1 * numero2
}

function divisao(){
    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value)
    var resposta = document.getElementById('div')
    if(numero2 !== 0){
        resposta.textContent = numero1 / numero2
    }else{
        resposta.textContent = "Não se divide por 0"
    }
}

