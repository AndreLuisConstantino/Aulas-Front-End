'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.foto = null
        this.titulo = 'Titulo'
        this.descricao = 'descricao'
        this.preco = 'Preco'
    }

    static get observedAttributes() {
        return ['foto', 'titulo', 'descricao', 'preco']
    }

    attributeChangedCallback(Attributes, oldValue, newValue) {
        this[Attributes] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card')

        const imagem = document.createElement('div')
        imagem.classList.add('card__image')

        const titulo = document.createElement('div')
        titulo.classList.add('card__title')
        titulo.textContent = this.titulo

        const descricao = document.createElement('div')
        descricao.classList.add('card__description')
        descricao.textContent = this.descricao

        const preco = document.createElement('div')
        preco.classList.add('card__price')
        preco.textContent = this.preco

        card.append(titulo, imagem, descricao, preco)

        return card
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .card {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                gap: 12px;
                border: 1px solid #ddd;
                border-radius: 5px;
                box-shadow: 0px 0px 8px #0006;
                padding: 16px;
                background-color: ${this.cor};
                cursor: pointer;
                
            }
            .card:hover{
                box-shadow: 0px 0px 8px #00f6;
            }
            
            .card__image{
                width: 200px;
                height: 200px;
                background-image: url(${this.foto});
                background-size: cover;
                background-position: center;
            }
            
            .card__title{
                font-size: 1.5rem;
            }
            
            .card__description{
                font-size: 1rem;
            }
            
            .card__price{
                font-size: 1.5rem;
                width: 100%;
                font-weight: 900;
            }
        `

        return css
    }
}

customElements.define('card-andre', card)