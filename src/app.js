import Spinner from './components/spinner/spinner'
import Header from './components/header/header';
import LoadButton from './components/loadButton/loadButton';
import Sender from './api';
import './main.scss';

export default class App {
    constructor() {
        this.loadBtn = new LoadButton(this.loadNews.bind(this));
        this.spinner = new Spinner();
        this.header = new Header();
    }

    async loadNews() {
        this.loadBtn.remove();
        this.spinner.render();
        this.header.render();

        const listModule = await import('./components/channelList/channelList');
        const List = listModule.default;
        const list = new List(this.spinner, this.header, Sender.create('GET'));

        this.header.addNavigationBtn(list.renderChannels.bind(list));
        list.renderChannels();
    }


    init() {
        this.loadBtn.render();
    }
}