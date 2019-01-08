import Spinner from './components/spinner/spinner'
import Header from './components/header/header';
import ChannelList from './components/channelList/channelList';
import Sender from './api';
import './main.scss';

export default class App {
    constructor() {
        this.spinner = new Spinner();
        this.header = new Header();
        this.list = new ChannelList(this.spinner, this.header, Sender.getNewsOnChannel);
    }

    init() {
        this.spinner.render();
        this.header.render();
        this.header.addNavigationBtn(this.list.renderChannels.bind(this.list));
        this.list.renderChannels();
    }
}