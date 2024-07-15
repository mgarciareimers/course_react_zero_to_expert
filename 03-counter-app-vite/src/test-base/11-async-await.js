// Async/await.
const baseUrl = 'http://api.giphy.com/v1/gifs/random?api_key=';
const apiKey = 'THz3owfFEihOch3CMG3Sj8KiL9HUys0B';

const getImage = async () => {
    try {
        const response = await fetch(`${ baseUrl }${ apiKey }`);
        const { data } = await response.json();

        const img = document.createElement('img');
        img.src = data.images.original.url;
        document.body.append(img);
    } catch(e) {
        console.log('ERROR:', e);
    }
}

getImage();