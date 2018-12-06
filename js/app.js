import Spinner from './components/spinner';
import ChannelList from './components/channelList';

class App {
    constructor() {
        this.spinner = new Spinner();
        this.channelListlist = new ChannelList();
    };

    init() {
        this.spinner.render();
        this.channelList.render();
    };
}

export default App;