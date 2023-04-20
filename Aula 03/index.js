'use strict'



import { produtos } from "./produtos.js"

const criaCard = ( produto ) => {
    const card = document.createElement('card-andre')
    card.foto = `./img/${produto.image}`
    card.titulo = `${produto.name}`
    card.descricao = `${produto.description}`
    card.preco = `${produto.price}`

    return card
}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map( criaCard )

    container.replaceChildren(...cards)
}


carregarProdutos()