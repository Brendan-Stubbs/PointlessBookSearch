import axios from 'axios';

export default axios.create({
    baseURL: "https://www.googleapis.com/books/",
})


// example url https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699