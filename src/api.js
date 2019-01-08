import { fetch as fetchPolyfill } from 'whatwg-fetch';

if (!window.fetch) {
    window.fetch = fetchPolyfill;
} 

export default class Sender {

    static async getNewsOnChannel(channel) {
   
        const apiKey = '0ea77f8ad02544d3b797b152f7c6bcda';
        const host = 'https://newsapi.org';
        const url = `${host}/v2/top-headlines?sources=${channel}&apiKey=${apiKey}`;
        const response = await fetch(url);

        return response.json();
    }
}