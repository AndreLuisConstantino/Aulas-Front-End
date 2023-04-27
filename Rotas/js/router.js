'use strict'

const routes = {
    '/': '/pages/home.html',
    '/vermelho': '/pages/vermelho.html',
    '/azul': '/pages/azul.html',
    '/rosa': '/pages/rosa.html',
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, '', window.event.target.href)

    const path = window.location.pathname

    const response = await fetch(routes[path])
    const html = await response.text()
    
    document.getElementById('root').innerHTML = html
}

window.route = route