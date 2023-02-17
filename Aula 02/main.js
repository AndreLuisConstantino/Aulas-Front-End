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

    if (aluno.nota < 6) {
        novaDiv.classList.add('sombra-vermelha')
    } else {
        novaDiv.classList.add('sombra-azul')
    }

    novaDiv.innerHTML = `<h2 class="aluno__nome">${aluno.nome}</h2>
                        <span class="aluno__nota">${aluno.nota}</span>`

    container.appendChild(novaDiv)
}

const handleClick = () => {

    const aluno = {
        nome: fazerVerfificacaoNome(prompt('Digite o nome do aluno: ')),
        nota: fazerVerfificacaoNota(prompt('Digite uma nota:').replace(',', '.'))
    }

    adicionarCard(aluno)
}

const fazerVerfificacaoNome = (nomeDigitado) => {
    let nome = nomeDigitado
    
    if (nome == '') {
        alert('Você deixou algum dos espaços em branco.')
    } else if (!isNaN(nome)) {
        alert('Você digitou números no lugar do nome.')
    } else if (nome == null) {
        alert('Você esqueceu de digitar algum valor.')
    } else {
        return nome
    }
}

const fazerVerfificacaoNota = (notaDigitada) => {
    let nota = notaDigitada

    if (nota == '') {
        alert('Você deixou algum dos espaços em branco.')
    } else if (isNaN(nota)) {
        alert('Você não digitou números.')
    } else if (nota < 0 || nota > 10) {
        alert('Digite uma nota válida') 
    } else if (nota == null) {
        alert('Você esqueceu de digitar algum valor')
    } else{
        return nota
    }
}

adicionar.addEventListener('click', handleClick)