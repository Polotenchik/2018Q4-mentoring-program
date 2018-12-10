import Spinner from './components/spinner';
import Header from './components/header';
import ChannelList from './components/channelList';

class App {
    constructor() {
        this.spinner = new Spinner();
        this.header = new Header();
        this.channelListlist = new ChannelList();
    };

    init() {
        this.spinner.render();
        this.channelList.render();
    };
}

export default App;