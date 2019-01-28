import Spinner from './components/spinner/spinner'
import Header from './components/header/header';
import LoadButton from './components/loadButton/loadButton';
import { channels } from './data';
import { dispatch } from './flux-pattern/dispatcher';
import { Actions } from './flux-pattern/actions';
import { UPDATE_CHANNELS } from './flux-pattern/actionTypes';
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
        const list = new List(this.spinner, this.header);

        this.header.addNavigationBtn(list.renderChannels.bind(list));
        list.renderChannels();
    }

    fillChannels() {
        const updateChannelsAction = new Actions(UPDATE_CHANNELS, channels);
        dispatch(updateChannelsAction);
    }

    init() {
        this.loadBtn.render();
        this.fillChannels();
    }
}