const { arrayBuffer } = require("stream/consumers");

async function getData(url) {
    try{
        const response = await fetch(url);
        return response.json();
    }
        catch(error){
            console.log(error);
        }
    }

    function getRandomGame(array) {
        const randomindex = Math.floor(Math.random() * array.length);
        return array[randomindex];
    };

    module.exports = { getData, getRandomGame };