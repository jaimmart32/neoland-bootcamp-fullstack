// Se rellena el formulario.
// Se hace una peticion POST al servidor.
// El servidor busca la informacion en la base de datos y la devuelve si la hay, si 
// no devuelve error.
// El front analiza la respuesta, si recibe los datos, cambia el contenido de la po
// kedex y si no muestra el mensaje de error al usuario.
// 
//
//
//
//

// 1. SET busqueda = INPUT: nombre o numero de pokemon
// 2. CLICK en boton de submit
// 3. READ base de datos
// 4.1. IF encuentro pokemon RETURN datos del pokemon
// 4.2. ELSE devuelvo pokemon no encontrado
// 5. SHOW tabla de datos (lista-pokemon) limpia
// 6.1. IF hay pokemon, lo añado a la lista con DISPLAY
// 6.1.1 IF hay mas de un polemon, con FOR por cada pokemon añado su ficha a la lista
// 6.2. ELSE no hay pokemon, muestro "polémon no encontrado" en lugar de la lista

let msg = 'Como estan los maquinas'
const NO_CAMBIA = 'mi constante'
let num = 7

// Template literal:
let pikachuMsg = `Soy Pikachu Rodriguez Mandanguez, ${msg}.`;
let lista = [
    'cadena',
    'texto',
    'nombre',
    5
]

let miObjeto = {
    1: 'uno',
    2: 'dos',
    3: 'tres'
}

let pokemon = {
    nombre: 'Bulbasaur',
    numero: 1,
}

console.log(msg, NO_CAMBIA, num);
console.log('Array:');
console.log(typeof lista)
console.log(lista);
console.log('Objeto: ', miObjeto);
console.log('--------------------------------------------');
console.log('lista: con join: ', lista.join(' '));

console.log('msg spliteado: ', msg.split(' '));
console.log('Mensaje de pikachu:', pikachuMsg)
console.log('--------------------------------------------');
console.log('Utilizando forEach');
lista.forEach((idioma) => {
    console.log(idioma);
});