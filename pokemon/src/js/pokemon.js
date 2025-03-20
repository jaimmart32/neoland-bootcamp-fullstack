import pokedex from '../pokedex/pokedex.json' with {type: "json"}

// Se rellena el formulario.
// Se hace una peticion POST al servidor.
// El servidor busca la informacion en la base de datos y la devuelve si la hay, si 
// no devuelve error.
// El front analiza la respuesta, si recibe los datos, cambia el contenido de la po
// kedex y si no muestra el mensaje de error al usuario.
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

window.addEventListener('DOMContentLoaded', onDOMContentLoaded);

function onDOMContentLoaded() {
    console.log('Ya esta disponible la página');

    // 2. Busca el pokemon introducido
    let botonBuscar = document.getElementById('botonBuscar');
    botonBuscar.addEventListener('click', buscarPokemon);

    // 3.
    renderizarListaPokemon();
}

/* 1. Busca en el pokedex.json un pokemon determinado usando el form de busqueda */
function buscarPokemon() {
    let campoBusqueda = document.getElementById('busqueda').value.toLowerCase();
    console.log('Buscando Pokémon:', campoBusqueda);

    //Filtra el pokémon por nombre o numero
    let resultado = pokedex.find((pokemon) => 
        pokemon.name.english.toLowerCase() === campoBusqueda || 
        String(pokemon.id) === campoBusqueda);
    if(resultado) {
        //Falta llamar a renderizarPokemon()
        console.log('Pokemon:', campoBusqueda, 'se encontró');
        renderizarPokemon(resultado);
    }
    else {
        console.log('Pokemon:', campoBusqueda, 'no se pudo encontrar');
    }
}

// Crea un li con el contenido de la tarjeta de un Pokémon.
function crearPokemon(pokemon) {
    let li = document.createElement('li');
    let divPokemon = document.createElement('div');
    divPokemon.classList.add('pokemon');

    let imgPokemon = document.createElement('img');
    imgPokemon.src = `pokedex/images/${String(pokemon.id).padStart(3, '0')}.png`;
    imgPokemon.alt = pokemon.name.english;
    divPokemon.appendChild(imgPokemon);

    let pNumero = document.createElement('p');
    pNumero.innerText = `N.º ${String(pokemon.id).padStart(4, '0')}`;
    divPokemon.appendChild(pNumero);

    let h2Nombre = document.createElement('h2');
    h2Nombre.innerText = pokemon.name.english;
    divPokemon.appendChild(h2Nombre);

    let divTipos = document.createElement('div');
    divTipos.classList.add('tipos');
    pokemon.type.forEach((tipo) => {
        let spanTipo = document.createElement('span');
        spanTipo.classList.add('tag');
        spanTipo.classList.add(`${tipo.toLowerCase()}`);
        spanTipo.innerText = tipo;
        divTipos.appendChild(spanTipo);
    });
    divPokemon.appendChild(divTipos);
    li.appendChild(divPokemon);

    return li;
}

// 4. Muestra el pokémon si es encontrado en la pokedex.
function renderizarPokemon(pokemon) {
    let listaPokedex = document.querySelector('.lista-pokedex');
    listaPokedex.innerHTML = "";// Cambiar por bucle con remove

    let li = crearPokemon(pokemon);
    listaPokedex.appendChild(li);
    console.log(`Pokemon: ${pokemon.name.english} renderizado.`)
}

/* 3. Genera dinámicamente la lista de pokémons inicial(mirar como hacer los span para los tipos) */
function renderizarListaPokemon() {
    let listaPokedex = document.querySelector('.lista-pokedex');
    listaPokedex.innerHTML = "";

    pokedex.forEach((pokemon) => {
        let li = crearPokemon(pokemon);
        listaPokedex.appendChild(li);
    })
    console.log('Lista de pokemon generada correctamente.');
}