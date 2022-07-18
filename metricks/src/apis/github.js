import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.github.com/search/repositories',
    params: {
        q: 'created:>2021-08-13',
        sort: 'stars',
        order: 'desc'
    }
})
