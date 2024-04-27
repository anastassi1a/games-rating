const fs = require('fs').promises;

async function makeRatingFile(path, array) {
    if (!path) {
        console.error('Неверный путь');
        return;
    }

    try {
        const ratingFile = await fs.readFile(path, 'utf8');
        const ratingArray = JSON.parse(ratingFile);


        fs.writeFile(path, JSON.stringify(ratingArray), () => {
            console.log('Файл записан!');
        });
    } catch (error) {
        console.error('Ошибка', error);
    }
}

module.exports = makeRatingFile;
