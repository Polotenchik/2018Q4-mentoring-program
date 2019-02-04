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
        const dot1 = document.createElement('div');
        const dot2 = document.createElement('div');
        const dot3 = document.createElement('div');
        dot1.classList.add('spinner-dot');
        dot2.classList.add('spinner-dot');
        dot3.classList.add('spinner-dot');
        this.spinner.appendChild(dot1);
        this.spinner.appendChild(dot2);
        this.spinner.appendChild(dot3);
    }
}