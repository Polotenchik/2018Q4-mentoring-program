export default class Spinner {
    
    constructor() {
        this.spinner = document.querySelector('.spinner');
    };

    run() {
        this.spinner.classList.add('loading');
    };

    stop() {
        this.spinner.classList.remove('loading');
    };

    render() {
        const elem = document.createElement('div');
        elem.classList.add('elem');
        this.spinner.appendChild(elem);

    }
}