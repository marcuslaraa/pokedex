const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order;
    pokemon.name = pokeDetail.name;
    
    pokemon.types = pokeDetail.tyepes.map((typeSlot) => typeSlot.type.name);
    const {type} = types;

    pokemon.types = types;
    pokemon.type = type;
    
    pokemon.photo = pokeDetail.pokemon.sprites.other.dream_world.front_default;

    return pokemon


    
}

pokeApi.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offSet = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`
    
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}




