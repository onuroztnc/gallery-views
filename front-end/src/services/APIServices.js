export const API_BASE_ADDRESS = "http://localhost:5000";
export const API_UPLOAD_IMAGE_URL = API_BASE_ADDRESS + '/upload_image';
export const API_GET_IMAGE_LIST = API_BASE_ADDRESS + '/list_images';
export const API_DOWNLOAD_IMAGE = API_BASE_ADDRESS + '/download_image?unique_id=';
export const API_GET_ANALYSE_IMAGE = API_BASE_ADDRESS + '/analyse_image?unique_id=';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    const defaults = {
        headers: headers
    };
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

async function requestFile(options) {
    const headers = new Headers({

    })

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    return await fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function uploadFile(file) {
    return requestFile({
        url: API_UPLOAD_IMAGE_URL,
        method: 'POST',
        body: file
    });
}

export function getImageIdList() {
    return request({
        url: API_GET_IMAGE_LIST,
        method: 'GET'
    });
}

export function getAnalyseImage(unique_id) {
    return request({
        url: API_GET_ANALYSE_IMAGE + unique_id,
        method: 'GET'
    });
}