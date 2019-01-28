const store = {
    channels: [],
    news: [],
};

export const storeProxy = new Proxy( store, {
    get(target, prop) {
        cosole.log({
            type: 'get',
            target,
            prop,
        });

        return Reflect.get(target, prop);
    },

    set(target, prop, value) {
        cosole.log({
            type: 'set',
            target,
            prop,
            value
        });

        return Reflect.get(target, prop, value);        
    },
});