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
        const randomindex = Math.floor(Math.randpm() * array.length);
        return array[randomindex];
    };

    module.exports = { getData, getRandomGame };