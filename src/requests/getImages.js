import axios, { query } from "axios";

const getImages = () => {

    if (!query) {
        return Promise.resolve([]);
    } else {
        return axios
        .get('https://images-api.nasa.gov/search?q=moon')
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err);
        });
    }
}

export default getImages;
