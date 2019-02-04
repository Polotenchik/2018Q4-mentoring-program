import { UPDATE_CHANNELS, UPDATE_NEWS } from './actionTypes';
import { storeProxy } from './store';

export const dispatch = (action) => {
    switch(action.type) {
        case UPDATE_CHANNELS:
            storeProxy.channels = action.payload;
            break;
        case UPDATE_NEWS:
            storeProxy.news = action.payload;
            break;
        default: 
            break;
    }
}