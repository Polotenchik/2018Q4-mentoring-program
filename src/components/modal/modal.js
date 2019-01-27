class Modal {

    biuldModal() {
        const modal = document.createElement('div');
        const content = document.createElement('div');
        const btn = document.createElement('button');

        modal.classList.add('modal');
        content.classList.add('content');
        content.textContent = 'No channels available';
        btn.textContent = 'close';
        btn.addEventListener('click', this.destroyModal.bind(this));
        content.appendChild(btn);
        modal.appendChild(content);

        return modal;
    }

    destroyModal() {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal');
        body.removeChild(modal);
        window.location.reload();
    }

    render() {
        const body = document.querySelector('body');
        const modal = this.biuldModal();
        body.appendChild(modal);
    }

}

const modalWindow = new Modal();
Object.freeze(modalWindow);

export default modalWindow.render();


