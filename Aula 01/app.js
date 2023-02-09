'use strict'

const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const calcular = document.getElementById('calcular')
const resultado = document.getElementById('resultado')
const formulario = document.getElementById('formulario')
const aprovado = 'aprovado, sua nota: '
const reprovado = 'reprovado, sua nota:'
const foraDeEscopo = 'está fora do escopo: '

function media (){
    resultado.value = (Number(numero1.value) + Number(numero2.value)) / 2
    
    if (resultado.value < 5){
        formulario.classList.remove('sombra-amarela')
        formulario.classList.remove('sombra-azul')
        formulario.classList.add('sombra-vermelha')
        resultado.value = reprovado + (Number(numero1.value) + Number(numero2.value)) / 2
    }else if(resultado.value < 0 || resultado.value > 10){
        formulario.classList.remove('sombra-vermelha')
        formulario.classList.remove('sombra-azul')
        formulario.classList.add('sombra-amarela')
        resultado.value = foraDeEscopo + (Number(numero1.value) + Number(numero2.value)) / 2   
    }else {
        formulario.classList.remove('sombra-amarela')
        formulario.classList.remove('sombra-vermelha')
        formulario.classList.add('sombra-azul')
        resultado.value = aprovado + (Number(numero1.value) + Number(numero2.value)) / 2
    }
}

calcular.addEventListener('click', media)
