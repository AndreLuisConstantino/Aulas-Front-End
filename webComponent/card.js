'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.nome = 'Nome do Aluno'
        this.foto = null
        this.cor = '#fff'
        this.turma = 'Nome da turma'
    }

    static get observedAttributes() {
        return ['nome', 'foto', 'cor', 'turma']
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

        const nomeAluno = document.createElement('div')
        nomeAluno.classList.add('card__text')
        nomeAluno.textContent = this.nome

        const imagem = document.createElement('div')
        imagem.classList.add('card__image')

        const turma = document.createElement('div')
        turma.classList.add('card__text')
        turma.textContent = this.turma

        card.append(nomeAluno, imagem, turma)

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
                width: 200px;
                height: 300px;
                display: grid;
                grid-template-rows: 20% 60% 20%;
                place-items: center;
                background-color: ${this.cor};
                border: 2px #000 solid;
                transition: all .2s;
                cursor: pointer;
            }
            .card:hover {
                width: 250px;
                height: 350px;
            }
            .card__text {
                color: #000;
                font-family: 'Mulish', sans-serif;
                font-weight: 700;
                font-size: 1.5rem;
                text-align: center;
            }
            .card__image {
                height: 100px;
                width: 100px;
                border-radius: 50% ;
                border: 2px #fff solid;
                background-image: url(${this.foto});
                background-size: cover;
                background-position: center;
            }
        `

        return css
    }
}

customElements.define('card-andre', card)