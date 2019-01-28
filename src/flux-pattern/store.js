const store = {
    channels: [],
    news: [],
};

export const storeProxy = new Proxy(store, {
    get(target, prop) {
        console.log({
            type: 'get',
            target,
            prop,
        });

        return Reflect.get(target, prop);
    },

    set(target, prop, value) {
        console.log({
            type: 'set',
            target,
            prop,
            value
        });

        return Reflect.set(target, prop, value);        
    },
});