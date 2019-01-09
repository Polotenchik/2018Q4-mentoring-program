export default class Header {
    
    biuldBtnBlock() {
        const container = document.createElement('div');
        const btn = document.createElement('button');
        btn.textContent = 'to channels';
        container.classList.add('to-channels', 'active');
        container.appendChild(btn);

        return container;
    }

    toggleLinkToChannels() {
        this.toChannelsSection.classList.toggle('active');
    }

    toggleUnderTitle() {
        const underTitle = document.querySelector('h1 small');
        underTitle.classList.toggle('active');
    }

    addNavigationBtn(callback) {
        this.toChannelsSection = document.querySelector('.to-channels');
        this.toChannelsSection.addEventListener('click', callback);
    }
    
    render() {
        const header = document.querySelector('.header');
        const h1 = document.createElement('h1');
        const small = document.createElement('small');
        const btnBlock = this.biuldBtnBlock();
        h1.textContent = 'News headlines';
        small.textContent = 'Choose channels';
        h1.appendChild(small);
        header.appendChild(h1);
        header.appendChild(btnBlock);
    }
    
}