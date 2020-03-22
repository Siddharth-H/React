import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID N8YkP4THlFqLBRsQ1kLfDihuoQ5WOZxyOiofgSwV0I4'
    }
});