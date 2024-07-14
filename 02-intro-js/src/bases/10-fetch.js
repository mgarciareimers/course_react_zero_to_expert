// Fetch.
const baseUrl = 'http://api.giphy.com/v1/gifs/random?api_key=';
const apiKey = 'THz3owfFEihOch3CMG3Sj8KiL9HUys0B';

const response = fetch(`${ baseUrl }${ apiKey }`)
    .then((result) => result.json())
    .then(({ data }) => {
        const img = document.createElement('img');
        img.src = data.images.original.url;
        document.body.append(img);
    })
    .catch((error) => {
        console.log('ERROR:', error);
    });