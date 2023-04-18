const offSet = 0;
const limit = 20;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.log(error))
    


    
