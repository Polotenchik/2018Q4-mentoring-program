import { Channel, News } from 'components';
import { promiseDelay, ShowError} from '../../common';
//import Sender from '../api';

//import { channels } from '../../data';

export default class ChannelList {

    constructor(spinner, header) {
        this.spinner = spinner;
        this.header = header;
        this.listBlock = document.querySelector('.list');
    }

    buildChannels() {

    }

    renderNews() {

    }

    clearList() {
        while(this.listBlock.firstChild) {
            this.listBlock.removeChild(this.listBlock.firstChild);
        }
    }

    toggleList() {
        this.listBlock.classList('active');
    }

    renderChannels() {
        this.toggleList();
        this.clearList();
        this.spinner.run();
        this.header.toggleUnderTitle();
        this.header.toggleLinkToChannels();
       
        new Promise((resolve, reject) =>{
            if (!channels.size) {
                reject...
            }
        })
    }

}
