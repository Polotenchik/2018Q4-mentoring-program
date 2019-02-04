import { fetch as fetchPolyfill } from 'whatwg-fetch';

export class Sender {
    constructor() {
        this.requestType = 'GET';
        this.headers = new Headers();
    }

    static create(requestType, headers) {
        this.requestType = requestType;
        if (headers) {
            headers.forEach(item => this.headers.append(item.title, item.value));
        }
    }

    static async send(url) {

        const response = await fetchPolyfill(url, { method: this.requestType, headers: this.headers})
                            .catch(async () => {
                                await import('./components/modal/modal');
                            });

        return response.json();
    }
}

export const LoggedSender = new Proxy(Sender, {
    get(target, name, receiver) {
        return Reflect.get({
            create(requestType, headers) {
                return target.create(requestType, headers);
            },
            send(url) {
                if (target.headers) {
                    console.log(`Headers: ${target.headers}`);
                }

                console.log(`Request type: ${target.requestType}`);
                console.log(`Getting data from: ${url}`);
                return target.send(url);
            },
        }, name, receiver);
    },
});
