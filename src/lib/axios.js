import axios from 'axios';

const axiosCall = (userInput, pageNumber) => {
    return axios({
        url: `http://www.omdbapi.com/`,
        method: "GET",
        responseType: "JSON",
        params: {
            apikey: "a5764580",
            s: userInput,
            type: "movie",
            page: pageNumber
        }
    })
    .then(object => {
        return object.data;
    });
};

export {axiosCall};