'use strict'

const adicionar = document.getElementById('adicionar')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML +'<div class="item">Senai</div>'
// }

const adicionarCard = (aluno) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')

    if (aluno.nota < 6) {
        novaDiv.classList.add('sombra-vermelha')
    } else {
        novaDiv.classList.add('sombra-azul')
    }

    novaDiv.innerHTML = `<h2 class="aluno__nome">${aluno.nome}</h2>
                        <span class="aluno__nota">${aluno.nota}</span>`

    container.appendChild(novaDiv)
}

const fazerVerfificacaoNota = (notaDigitada) => {
    let nota = notaDigitada
    let status = false

    if (nota == '') {
        alert('Você deixou algum dos espaços em branco.')
        status = false
    } else if (isNaN(nota)) {
        alert('Você não digitou números.')
        status = false
    } else if (nota < 0 || nota > 10) {
        alert('Digite uma nota válida') 
        status = false
    } else if (nota == null) {
        alert('Você esqueceu de digitar algum valor')
        status = false
    } else{
        return nota
    }
}

const fazerVerfificacaoNome = (nomeDigitado) => {
    let nome = nomeDigitado
    let status = true
    
    if (nome == '') {
        alert('Você deixou algum dos espaços em branco.')
        status = false
    } else if (!isNaN(nome)) {
        alert('Você não digitou letras.')
        status = false
    } else if (nome == null) {
        alert('Você esqueceu de digitar algum valor.')
        status = false
    } else {
        return nome
    }
}

const handleClick = () => {

    const aluno = {
        nome: fazerVerfificacaoNome(prompt('Digite o nome do aluno: ')),
        nota: fazerVerfificacaoNota(prompt('Digite uma nota:').replace(',', '.'))
    } 
    if(aluno.nome != false && aluno.nota != false){
        
        adicionarCard(aluno)
    }

    
}
 



adicionar.addEventListener('click', handleClick)