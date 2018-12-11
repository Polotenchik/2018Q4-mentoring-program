import Spinner from './components/spinner/spinner';
import Header from './components/header/header';
import ChannelList from './components/channelList/channelList';

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