export default class LoadButton {

    constructor(loadNews) {
        this.loadNews = loadNews;
    }

    biuldBtn() {
        const container = document.createElement('div');
        const btn = document.createElement('button');
        btn.textContent = 'Load App';
        btn.classList.add('load-btn');
        container.appendChild(btn);

        return container;
    }

    remove() {
        const btn = document.querySelector('.load-btn');
        const parent = btn.parentElement;

        parent.removeChild(btn);
    }

    render() {
        const body = document.querySelector('body');
        const btn = this.biuldBtn();

        btn.addEventListener('click', this.loadNews);
        body.appendChild(btn);
    }




}