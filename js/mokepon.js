let sectionSeleccionarAtaque = document.getElementById('SelAtaque')
let sectionSeleccionarReiniciar = document.getElementById('Reiniciar')
sectionSeleccionarReiniciar.style.display = 'none'
let BotonPersonajeJugador = document.getElementById('Boton-Personaje')
let botonFuego = document.getElementById('btn-fuego')
let botonAgua = document.getElementById('btn-agua')
let botonTierra = document.getElementById('btn-tierra')
let botonReiniciar = document.getElementById('btn-reiniciar')

let ataqueJugador
let ataqueOponente
let vidasJugador =  3
let vidasOponente = 3

function iniciarJuego(){

    
    sectionSeleccionarAtaque.style.display = 'none'

    BotonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)
    
    botonFuego.addEventListener('click', ataqueFuego)
    
    botonAgua.addEventListener('click', ataqueAgua)
    
    botonTierra.addEventListener('click', ataqueTierra)
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarPersonajeJugador(){

    let sectionSeleccionarPersonaje = document.getElementById('SelPersonaje')
    sectionSeleccionarPersonaje.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('SelAtaque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputMoises = document.getElementById('Moises')
    let inputDavid = document.getElementById('David')
    let inputDaniel = document.getElementById('Daniel')
    let spanMascotaJugador = document.getElementById('personaje-jugador')

    if (inputMoises.checked){
        spanMascotaJugador.innerHTML = 'Miss Fire'
    }else if (inputDavid.checked){
        spanMascotaJugador.innerHTML = 'Mr Water'
    } else if (inputDaniel.checked){
        spanMascotaJugador.innerHTML = 'Stone Boy'
    }else{
        alert('Debes seleccionar un Personaje')
    }

    seleccionarPersonajeOponente()
}

function seleccionarPersonajeOponente(){
    let personajeAleatorio = aleatorio(1,3)
    let spanPersonajeOponente = document.getElementById('personaje-enemigo')

    if (personajeAleatorio == 1){
        spanPersonajeOponente.innerHTML = 'Miss Fire'
    }else if (personajeAleatorio == 2){
        spanPersonajeOponente.innerHTML = 'Mr Water'
    }else if (personajeAleatorio == 3){
        spanPersonajeOponente.innerHTML = 'Stone Boy'
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioOponente()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioOponente()
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioOponente()
}

function ataqueAleatorioOponente(){
    let atauqeAleatorio = aleatorio(1,3)

    if (atauqeAleatorio == 1){
        ataqueOponente = 'FUEGO'
    }else if (atauqeAleatorio == 2){
        ataqueOponente = 'AGUA'
    }else{
        ataqueOponente = 'TIERRA'
    }

    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasOponente = document.getElementById('vidas-oponente')

    if(ataqueOponente== ataqueJugador){
        crearMensaje('EMPATE')
    }else if(ataqueJugador == 'FUEGO' && ataqueOponente == 'TIERRA'){
        crearMensaje('GANASTE')
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    }else if(ataqueJugador == 'AGUA' && ataqueOponente == 'FUEGO'){
        crearMensaje('GANASTE')
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    }else if(ataqueJugador == 'TIERRA' && ataqueOponente == 'AGUA'){
        crearMensaje('GANASTE')
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    }else{
        crearMensaje('PERDISTE')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){

    if(vidasOponente == 0){
        crearMensajeFinal("Felicidades Ganaste!! 🎉 ")
    }else if(vidasJugador == 0){
        crearMensajeFinal("Lo  Siento Perdiste 😭")
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('resultado')
    let AtaquesJugador = document.getElementById('Ataque-jugador')
    let AtaquesOponente = document.getElementById('Ataque-enemigo')
    
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueOponente = document.createElement('p')
    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueOponente.innerHTML = ataqueOponente

    AtaquesJugador.appendChild(nuevoAtaqueJugador)
    AtaquesOponente.appendChild(nuevoAtaqueOponente)

}

function crearMensajeFinal(resultadoFinal){
       
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('btn-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('btn-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('btn-tierra')
    botonTierra.disabled = true

    let sectionSeleccionarReiniciar = document.getElementById('Reiniciar')
    sectionSeleccionarReiniciar.style.display = 'block'
}

function reiniciarJuego(){

    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)
}

window.addEventListener('load', iniciarJuego)