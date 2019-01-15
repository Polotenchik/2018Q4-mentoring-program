import News from '../news/news';
import Channel from '../channel/channel';
import { pause, showError} from '../../common';
import { channels } from '../../data';

export default class ChannelList {

    constructor(spinner, header, loadNews) {
        this.spinner = spinner;
        this.header = header;
        this.loadNews = loadNews;
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
            const data = await this.loadNews(element.dataset.value);
            await pause(1000);
            this.clearList();

            data.articles.slice(0, 12)
                .forEach((item) => {
                    const news = new News(item).render();
                    this.listBlock.appendChild(news);
                });

            this.spinner.stop();
            this.toggleList();
        } catch (err) {
            this.spinner.stop();
            showError(err);
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

         if (!channels.size) {
                showError(new Error('No channels available'));
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
