import News from '../news/news';
import Channel from '../channel/channel';
import { promiseDelay, showError} from '../../common';
import Sender from '../../api';
import { channels } from '../../data';

export default class ChannelList {

    constructor(spinner, header) {
        this.spinner = spinner;
        this.header = header;
        this.listBlock = document.querySelector('.list');
    }

    buildChannels() {
       
        const elements = [];
        channels.forEach((value, key) => {
            const channel = new Channel(value, key);
            const channelBlock = channel.render();
            this.listBlock.appendChild(channelBlock);
            elements.push(channelBlock);
        });

        return elements;
    }

    renderNews(event) {

        const { target } = event;
        this.toggleList();
        this.header.toggleUnderTitle();
        this.header.toggleLinkToChannels();
        this.spinner.run();

        Sender.getNewsOnChannel(target.dataset.value)
            .then(data => promiseDelay(2000, data))
                .then( data => {
                    this.clearList();
                    data.articles.slice(0,12)
                                 .forEach(item => {
                                     const news = new News(item).render();
                                     this.listBlock.appendChild(news);
                                 });
                })
                    .then(() => {
                        this.spinner.stop();
                        this.toggleList();
                    })
                        .catch(err => {
                            this.spinner.stop();
                            showError(err);
                        });
    }

    clearList() {
        while(this.listBlock.firstChild) {
            this.listBlock.removeChild(this.listBlock.firstChild);
        }
    }

    toggleList() {
        this.listBlock.classList.toggle('active');
    }

    renderChannels() {
        
        this.toggleList();
        this.clearList();
        this.spinner.run();
        this.header.toggleUnderTitle();
        this.header.toggleLinkToChannels();
      
        new Promise((resolve, reject) => {
            if (!channels.size) {
                reject(new Error('No channels available'));
               
            }
            
            resolve(this.buildChannels());
        })
            .then(data => promiseDelay(2000, data))
                .then(data => {
                    this.spinner.stop(); 
                    this.toggleList();
                    data.forEach(item =>  item.addEventListener('click', this.renderNews.bind(this)));
                })
                    .catch(err => {
                        this.spinner.stop();
                        showError(err); 
                    }); 
    }

}
