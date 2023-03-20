import {createStore} from 'vuex'

export const store = createStore({
    state: {
        MODE: localStorage.mode,
        BG_COLOR: 'rgba(60,62,65)',
        TEXT_COLOR: 'white',
        LINK_COLOR: 'lightgray',
        BIG_SHADOWS: {
            'box-shadow': 'rgba(255,255,255,.05) -10px -10px 25px, rgba(0,0,0,.15) 10px 10px 25px'
        },
        BIG_INSET_SHADOWS: {
            'box-shadow': 'inset rgba(255,255,255,.05) -10px -10px 25px, inset rgba(0,0,0,.15) 10px 10px 25px'
        },
        SMALL_SHADOWS: {
            'box-shadow': 'rgba(255,255,255,.05) -5px -5px 12px, rgba(0,0,0,.2) 5px 5px 20px'
        }
    },
    getters: {

    },
    mutations: {
        setMode(state) {
            if(state.MODE == 'dark'){
                state.MODE = 'light'
                state.BG_COLOR = '#c3c3c1'
                state.TEXT_COLOR = 'dimgray'
                state.LINK_COLOR = 'dimgray'
                state.BIG_SHADOWS = {
                    'box-shadow': '27px 27px 54px #b3b3b2, -27px -27px 54px #d3d3d0'
                }
                state.BIG_INSET_SHADOWS = {
                    'box-shadow': 'inset 27px 27px 20px #b3b3b2, inset -27px -27px 20px #d3d3d0'
                }
                state.SMALL_SHADOWS = {
                    'box-shadow': '10px 10px 20px #a6a6a4, -10px -10px 20px #d3d3d0'
                }
            }else{
                state.MODE = 'dark'
                state.BG_COLOR = 'rgba(60,62,65)'
                state.TEXT_COLOR = 'white'
                state.LINK_COLOR = 'lightgray'
                state.BIG_SHADOWS = {
                    'box-shadow': 'rgba(255,255,255,.05) -10px -10px 25px, rgba(0,0,0,.15) 10px 10px 25px'
                }
                state.BIG_INSET_SHADOWS = {
                    'box-shadow': 'inset rgba(255,255,255,.05) -10px -10px 25px, inset rgba(0,0,0,.15) 10px 10px 25px'
                }
                state.SMALL_SHADOWS = {
                    'box-shadow': 'rgba(255,255,255,.05) -5px -5px 12px, rgba(0,0,0,.1) 5px 5px 20px'
                }
            }
        }
    },
    actions: {

    },
});