// Async/await.
const baseUrl = 'http://api.giphy.com/v1/gifs/random?api_key=';
const apiKey = '9l1MnTZBrB8ZXAU1drK3WGZFiQYsKDoV';

const getImage = async () => {
    try {
        const response = await fetch(`${ baseUrl }${ apiKey }`);
        const { data } = await response.json();

        return data.images.original.url;
    } catch(e) {
        return 'Image not found';
    }
}

export {
    getImage,
}