import Channel from './channel';
import News from './news';
import Sender from '../api';
import { promiseDelay, ShowError} from '../common';
import { channels } from '../data';

class ChannelList {
    constructor(spinner, header) {
        this.spinner = spinner;
        this.header = header;
        this.listBlock = document.querySelector('.list');
    }

    renderChannels() {
        
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



}

export default ChannelList;