const searchInput = document.querySelector('.header__search_input');
const infoFiles = document.querySelectorAll('.info-file');

const sourceData = {
    api: {
        visibility: true
    },
    ci: {
        visibility: true
    },
    contrib: {
        visibility: true
    },
    http: {
        visibility: true
    },
    lib: {
        visibility: true
    },
    local: {
        visibility: true
    },
    packages: {
        visibility: true
    },
    robots: {
        visibility: true
    },
    server: {
        visibility: true
    },
    ut: {
        visibility: true
    },
    "README.md": {
        visibility: true
    },
    "ya.make": {
        visibility: true
    }
};

const SEARCH_FILE = {
    type: 'SEARCH_FILE',
    nameFile: ''
};

function searchFile(name) {
    return{
        type: 'SEARCH_FILE',
        nameFile: name
    };
};

class Store{
    constructor(reducer, state) {
        this.state = state;
        this.reducer = reducer;
        this.listeners = [];
    };

    getState() {
        return this.state;
    };

    subscribe(cb) {
        this.listeners.push(cb);
        return () => {
            const index = this.listeners.indexOf(cb);
            this.listeners.splice(index, 1);
        };
    };

    dispatch(action) {
        this.state = this.reducer(this.state, action);
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_FILE':
        const newState = {...state};
            for(key in newState){
                if(key.length >= action.nameFile.length && key.substr(0, action.nameFile.length).match(action.nameFile)) {
                    newState[key].visibility = true;
                } else {
                    newState[key].visibility = false;
                };
            };

        return newState;
    };
};

class View {
    constructor(el, store) {
        this.el = el;
        this.store = store;
    };

    render() {
        [].slice.call(this.el).forEach(elem => {
            const elemAttribute = elem.getAttribute('data-name-file');
            elem.setAttribute('data-visibility', this.store.getState()[elemAttribute].visibility)
        });
    };
};

const store = new Store(reducer, sourceData);
const view = new View(infoFiles, store);

searchInput.addEventListener('input', function() {
    store.dispatch(searchFile(this.value));
    view.render();
});