
const Boton = document.getElementById('boton')

Boton.addEventListener('click', obName )

//Obtenemos los heading
const NameInsert = document.getElementById('h1')
const Hello = document.getElementById('h2')

// Obtenemos el nombre
function obName(){
    const name = prompt('Insert Name')
    addName(name)
}

// cambiamos el nombre
function addName(nombre){
    Hello.textContent = 'Hello '
    NameInsert.textContent = nombre
}