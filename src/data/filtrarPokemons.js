/*export const filtrarPorNombre = ({ pokemons, nombre, setPokemonsFiltrados }) => {
    setPokemonsFiltrados(pokemons.filter((pokemon) => {
        return pokemon.name.includes(nombre);
    }))
}*/
export const filtradoMixto = ({ pokemons, nombre, filtro }) => {
    const filtradoAuxiliar = filtrarPokemons({ pokemons, filtro });
    return nombre === "" ? filtradoAuxiliar : filtradoAuxiliar.filter(poke => { return poke.name.includes(nombre) })
}
export const verificarTieneTipo = ({ tipos, seleccionado }) => {
    let valor = false;
    tipos.forEach(tipo => {
        if (tipo.type.name === seleccionado) {
            valor = true;
        }
    });

    return valor;
}
export const verificarTieneSegundoElemento = ({ tipos }) => {
    return tipos.length == 2;
}
const filtrarTipos = ({ filtradoAuxiliar, elemento1, elemento2 }) => {

    if (elemento1 == "all" && elemento2 == "none") return filtradoAuxiliar; //MUESTRA TODOS

    else if (elemento1 == "all") {
        if (elemento2 == "all") { //2 ELEMENTOS
            return filtradoAuxiliar.filter((poke) => {
                return verificarTieneSegundoElemento({ tipos: poke.types });
            })
        }
        else if (elemento2 != "all" && elemento2 != "none") { //ELEMENTO 2
            return filtradoAuxiliar.filter((poke) => {
                return verificarTieneTipo({ tipos: poke.types, seleccionado: elemento2 })
            })
        }
    }
    else if (elemento1 != "all") {
        if (elemento2 == "all") { //ELEMENTO 1 Y CON 2 ELEMENTOS
            return filtradoAuxiliar.filter((poke) => {
                return verificarTieneSegundoElemento({ tipos: poke.types }) && verificarTieneTipo({ tipos: poke.types, seleccionado: elemento1 })
            })
        }
        else if (elemento2 == "none") {//ELEMENTO 1
            return filtradoAuxiliar.filter((poke) => {
                return verificarTieneTipo({ tipos: poke.types, seleccionado: elemento1 })
            })
        }
        else if (elemento2 != "all" && elemento2 != "none") {//ELEMENTO 1 Y ELEMENTO 2
            return filtradoAuxiliar.filter((poke) => {
                return verificarTieneTipo({ tipos: poke.types, seleccionado: elemento1 }) && verificarTieneTipo({ tipos: poke.types, seleccionado: elemento2 })
            })
        }
    }
}

export const filtrarPokemons = ({ pokemons, filtro }) => {
    if (filtro === null) return pokemons;
    const { minVida, maxVida, minAtaque, maxAtaque, minDefensa, maxDefensa, elemento1, elemento2, ordenamiento } = filtro;
    const filtradoAuxiliar = pokemons.filter((poke) => {
        return poke.stats[0].base_stat >= minVida && poke.stats[0].base_stat <= maxVida
            && poke.stats[1].base_stat >= minAtaque && poke.stats[1].base_stat <= maxAtaque
            && poke.stats[2].base_stat >= minDefensa && poke.stats[2].base_stat <= maxDefensa;
    })
    switch (ordenamiento) {
        case "ascNumero":
            filtradoAuxiliar.sort((a, b) => a.id > b.id);
            break;
        case "descNumero":
            filtradoAuxiliar.sort((a, b) => a.id < b.id);
            break;
        case "ascNombre":
            filtradoAuxiliar.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "descNombre":
            filtradoAuxiliar.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }

    return filtrarTipos({ filtradoAuxiliar, elemento1, elemento2 });

}