const url = "https://rickandmortyapi.com/api/character"
const url2 = "https://rickandmortyapi.com/api/location"
const url3 = "https://rickandmortyapi.com/api/episode"
//const url4 = `https://rickandmortyapi.com/api/character?page${page}`
const quadP1 = document.querySelector('#personagens1');
const quadP2 = document.querySelector('#personagens2');
const quadP3 = document.querySelector('#personagens3');
const quadP4 = document.querySelector('#personagens4');
const imagesContainer = document.querySelector('#test-container');



async function getAllCharacters() {

    let randomNum = Math.floor(Math.random() * 827) + 1;

    const response = await fetch(url);

    //console.log(response);

    const data = await response.json();

    console.log(data.results.length);
    
    setInterval(function() {
        let randomIndexes = generateRandomIndexes(4, data.results.length);
        quadP1.src = data.results[randomIndexes[0]].image;
        quadP2.src = data.results[randomIndexes[1]].image;
        quadP3.src = data.results[randomIndexes[2]].image;
        quadP4.src = data.results[randomIndexes[3]].image;
    }, 2000);
}

function generateRandomIndexes(count, max) {
    let indexes = [];

    while (indexes.length < count) {
        let randomIndex = Math.floor(Math.random() * max);
        if (!indexes.includes(randomIndex)) {
            indexes.push(randomIndex);
        }
    }

    return indexes;
}


async function getAllLocations() {
    
    const response = await fetch(url2);

    //console.log(response);

    const data = await response.json();

    console.log(data.results[0]);
    

}

async function getAllEpisodes() {
    
    const response = await fetch(url3);

    //console.log(response);

    const data = await response.json();

    console.log(data.results[0]);
    

}

getAllCharacters();
getAllLocations();
getAllEpisodes();