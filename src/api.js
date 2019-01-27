import { fetch as fetchPolyfill } from 'whatwg-fetch';

export default class Sender {
    constructor() {
        this.requestType = 'GET';
        this.headers = new Headers();
    }

    static create(requestType, headers) {
        this.requestType = requestType;
        if (headers) {
            headers.forEach(item => this.headers.append(item.title, item.value));
        }

        return this;
    }

    static async send(url) {

        const response = await fetch(url, { method: this.requestType, headers: this.headers})
                            .catch(async () => {
                                await import('./components/modal/modal');
                            });

        return response.json();
    }
}

// export default class Sender {

//     static async getNewsOnChannel(channel) {
   
//         const apiKey = '0ea77f8ad02544d3b797b152f7c6bcda';
//         const host = 'https://newsapi.org';
//         const url = `${host}/v2/top-headlines?sources=${channel}&apiKey=${apiKey}`;
//         const response = await fetchPolyfill(url);

//         return response.json();
//     }
// }