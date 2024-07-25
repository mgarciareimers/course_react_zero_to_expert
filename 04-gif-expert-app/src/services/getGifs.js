export default async (category) => {
    const apiKey = 'n0SDRr0QES5YRloseYTb1MATJ6wk64pc';
    const limit = 5;
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=${ limit }`;

    const response = await fetch(url);
    const decodedBody = await response.json();

    try {
        if (response.status === 200) {
            const { data } = decodedBody;
    
            return {
                statusCode: 200,
                data: {
                    title: 'Error',
                    text: decodedBody.meta.msg,
                    images: data.map((item) => ({
                        id: item.id,
                        title: item.title,
                        url: item.images.downsized_medium.url,
                    }))
                }
            };
        }

        return {
            statusCode: response.status,
            title: 'Error',
            text: decodedBody.meta.msg,
            data: null,
        };
    } catch(e) {
        return {
            statusCode: 500,
            title: 'Error',
            text: e,
            data: null
        };
    }
}