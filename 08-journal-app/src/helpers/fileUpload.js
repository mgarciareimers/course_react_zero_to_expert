const fileUpload = async (file) => {
    if (file === undefined || file === null) {
        throw new Error('No file selected');
    }

    const url = 'https://api.cloudinary.com/v1_1/dptixz77g/upload';

    // Prepare data.
    const formData = new FormData();

    formData.append('upload_preset', 'react-journal');
    formData.append('file',file);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            return {
                success: false,
                errorCode: 1,
                errorMessage: 'Error while uploading the file.'
            };
        }

        const decodedBody = await response.json();

        return {
            success: true,
            url: decodedBody.secure_url
        }
    } catch (e) {
        return {
            success: false,
            errorCode: e.code,
            errorMessage: e.message
        };
    }
}

export default fileUpload;