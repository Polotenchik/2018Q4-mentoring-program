import { UPDATE_CHANNELS, UPDATE_NEWS } from './actionTypes';
import { storeProxy } from './store';

export const dispatch = (action) => {
    switch(action.type) {
        case UPDATE_CHANNELS:
            return storeProxy.channels = action.payload;
        case UPDATE_NEWS:
            return storeProxy.news = action.payload;
        default: 
            return storeProxy;
    }
}