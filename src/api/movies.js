import axios from 'axios'; 

const API_KEY = "8645fb2";
const API_URL = "http://www.omdbapi.com";

function requestStarWarsObject(){
    return{
        method: "get",
        url: API_URL,
        params: {
            s:"star wars", //Por que esse parametro é 's'? 
            apiKey: API_KEY
        }
    }
}

export function getStarWarsMovies(){
    return axios.get(requestStarWarsObject()) // Temos dois rettornos, por que? e qual é o verdadeiro? 
    .then(response => {
        console.log("Funcionou", response)
        return response.data.Search
    })
    .catch(err => {
        console.error(err); // O que é console error 
        return err;
    })
} 