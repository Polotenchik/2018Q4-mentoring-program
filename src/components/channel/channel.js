export default class Channel {
    constructor(value, title) {
        this.value = value;
        this.title = title;
    }

    render() {
        const p = document.createElement('p');
        p.classList.add('channel');
        p.textContent = this.title;
        p.setAttribute('data-value', this.value);

        return p;
    }
}