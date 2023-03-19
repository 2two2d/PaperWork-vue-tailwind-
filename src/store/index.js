import {createStore} from 'vuex'

export const store = createStore({
    state: {
        MODE: localStorage.mode,
        BG_COLOR: 'rgba(60,62,65)',
        TEXT_COLOR: 'white',
        LINK_COLOR: 'lightgray',

    },
    getters: {

    },
    mutations: {
        setMode(state) {
            if(state.MODE == 'dark'){
                state.MODE = 'light'
                state.BG_COLOR = 'rgba(240,240,220)'
                state.TEXT_COLOR = 'gray'
                state.LINK_COLOR = 'gray'
            }else{
                state.MODE = 'dark'
                state.BG_COLOR = 'rgba(60,62,65)'
                state.TEXT_COLOR = 'white'
                state.LINK_COLOR = 'lightgray'
            }
        }
    },
    actions: {

    },
});