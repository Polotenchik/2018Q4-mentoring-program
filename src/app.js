import { Spinner, Header, ChannelList } from 'components';

export default class App {
    constructor() {
        this.spinner = new Spinner();
        this.header = new Header();
        this.list = new ChannelList(this.spinner, this.header);
    }

    init() {
        this.spinner.render();
        this.header.render();
        this.header.addNavigationBtn(this.list);
    }
}