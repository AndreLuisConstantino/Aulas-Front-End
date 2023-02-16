'use strict'

const adicionar = document.getElementById('adicionar')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML +'<div class="item">Senai</div>'
// }

const adicionarCard = (aluno) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class="aluno__nome">${aluno.nome}</h2>
                        <span class="aluno__nota">${aluno.nota}</span>`

    if(nota > 5){
        novaDiv.classList.add('sombra-azul')
    } else if(nota < 5){
        novaDiv.classList.add('sombra-vermelha')
    }

    container.appendChild(novaDiv)
}

const handleClick = () => {

    const aluno = {
        nome: prompt('Digite o nome do aluno'),
        nota: prompt('Digite uma nota:').replace(',','.')
    }

    if(fazerVerfificacaoNome(aluno.nome) == true || fazerVerfificacao(aluno.nota)){
        
    } else {
        alert('Algo deu errado')
    }
    
    
}

const fazerVerfificacaoNome = (nomeDigitado, notaDigitada) => {
    let nome = nomeDigitado
    let nota = notaDigitada
    let status = true

    if(nome == '' || nota == ''){
        alert('Você deixou algum dos espaços em branco.')
    } else if(isNaN(nota)){
        alert('Você não digitou números.')
    } else if(nota < 0 || nota > 10){
        alert('Digite uma nota válida')
    } else if(!isNaN(nome)) {
        alert('Você digitou numeros no lugar do nome')
    }
    else if(nota == null || nome == null){
        alert('Você esqueceu de digitar algum valor')
    } else {
        return nome
    }
}

const fazerVerfificacao = (nomeDigitado, notaDigitada) => {
    let nome = nomeDigitado
    let nota = notaDigitada
    let status = true

    if(nome == '' || nota == ''){
        alert('Você deixou algum dos espaços em branco.')
    } else if(isNaN(nota)){
        alert('Você não digitou números.')
    } else if(nota < 0 || nota > 10){
        alert('Digite uma nota válida')
    } else if(!isNaN(nome)) {
        alert('Você digitou numeros no lugar do nome')
    }
    else if(nota == null || nome == null){
        alert('Você esqueceu de digitar algum valor')
    } else {
        return nota
    }
}

adicionar.addEventListener('click', handleClick)