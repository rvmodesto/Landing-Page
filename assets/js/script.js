//var //global
//let //local, mutável
//const //global, imutável

/* **Case Sensitive**

por tag: getEementByTagName()
por Id: getElementById()
por nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email') //selector precisa de # ou .
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('mapa')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {

    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    } else{
        txt.innerHTML = "Nome válido"
        txt.style.color = 'green'
        nomeOk = true
    }

}


function validaEmail() {

    let txtEmail = document.querySelector('txtEmail')
    if (email.value.indexOf('@') == -1) {
        txt.innerHTML = 'E-mail Inválido'
        txt.style.color = 'red'
    } else{
        txt.innerHTML = "E-mail válido"
        txt.style.color = 'green'
        emailOk = true
    }

}

function validaAssunto(){

    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'O texto é muit grande, gite no máximo 100 caracteres'
        txtAssunto.style.backgroundColor = 'red'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }

}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    } else{
        alert('Preencha o formulário corretamente antes de enviar..')
    }
}

function mapaZoom(){
    mapa .style.width = '800px'
    mapa.style.height = '600px'

}

function mapaNormal(){
    mapa .style.width = '400px'
    mapa.style.height = '300px'
}