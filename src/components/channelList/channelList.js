import News from '../news/news';
import Channel from '../channel/channel';
import { LoggedSender } from '../../api'
import { pause } from '../../common';
import { channels } from '../../data';
import { API_KEY, HOST, NUMBERS_OF_ARTICLES } from '../../constants';

export default class ChannelList {

    constructor(spinner, header) {
        this.spinner = spinner;
        this.header = header;
        this.listBlock = document.querySelector('.list');
        this.listBlock.addEventListener('click', this.goToNews.bind(this));
    }

    buildChannels() {
       
        const elements = [];
        const fragmentChannels = document.createDocumentFragment();

        channels.forEach((value, key) => {
            const channel = new Channel(value, key);
            const channelBlock = channel.render();
            elements.push(channelBlock);
            fragmentChannels.appendChild(channelBlock);
        });
        
        this.listBlock.appendChild(fragmentChannels);

        return elements;
    }

    goToNews(event) {
        let { target } = event;

        while (target !== this.listBlock) {
            if (target.tagName === 'P') {
                this.renderNews(target);
                return;
            }

            target = target.parentNode;
        }
    }

    async renderNews(element) {

        this.toggleList();
        this.header.toggleUnderTitle();
        this.header.toggleLinkToChannels();
        this.spinner.run();

        try {
            LoggedSender.create('GET');
            const data = await LoggedSender.send(`${HOST}/v2/top-headlines?sources=${element.dataset.value}&apiKey=${API_KEY}`);
            await pause(1000);
            this.clearList();

            data.articles.slice(0, NUMBERS_OF_ARTICLES)
                .forEach((item) => {
                    const news = new News(item).render();
                    this.listBlock.appendChild(news);
                });

            this.spinner.stop();
            this.toggleList();
        } catch (err) {
            await import('../modal/modal');
            this.spinner.stop();
        }

    }

    clearList() {
        while(this.listBlock.firstChild) {
            this.listBlock.removeChild(this.listBlock.firstChild);
        }
    }

    toggleList() {
        this.listBlock.classList.toggle('active');
    }

    async renderChannels() {

        if (!channels || !channels.size) {
            await import('../modal/modal');
            this.spinner.stop();
            return;
        }
            
        this.toggleList();
        this.clearList();
        this.spinner.run();
        this.header.toggleUnderTitle();
        this.header.toggleLinkToChannels();
        this.buildChannels();
        await pause(2000);
        this.spinner.stop(); 
        this.toggleList();
    }

}
