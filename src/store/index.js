import {createStore} from 'vuex'
import axios from "axios";

export const store = createStore({
    state: {
        RESPONSE: '',
        MODE: localStorage.mode,
        SOUND: '',
        BG_COLOR: 'rgba(60,62,65)',
        BG_TIMER_MARKS: 'dodgerblue',
        BG_UP: 'linear-gradient(145deg, #404246, #36383b)',
        TEXT_COLOR: 'white',
        LINK_COLOR: 'lightgray',
        BIG_SHADOWS: {
            'box-shadow': '#44484b -10px -10px 50px, #313234 10px 10px 50px'
        },
        BIG_INSET_SHADOWS: {
            'box-shadow': 'inset #44484b -10px -10px 25px, inset #313234 10px 10px 25px'
        },
        SMALL_SHADOWS: {
            'box-shadow': '#44484b -5px -5px 12px, #3132345px 5px 20px'
        }
    },
    getters: {

    },
    mutations: {
        setMode(state) {
            if(state.MODE === 'dark'){
                state.MODE = 'light'
                state.BG_COLOR = '#c3c3c1'
                state.BG_UP = 'linear-gradient(145deg, #d1d1cf, #b0b0ae)'
                state.TEXT_COLOR = 'dimgray'
                state.LINK_COLOR = 'dimgray'
                state.BIG_SHADOWS = {
                    'box-shadow': '27px 27px 54px #b3b3b2, -27px -27px 54px #d3d3d0'
                }
                state.BIG_INSET_SHADOWS = {
                    'box-shadow': 'inset 27px 27px 20px #b3b3b2, inset -27px -27px 20px #d3d3d0'
                }
                state.SMALL_SHADOWS = {
                    'box-shadow': '10px 10px 20px #949494, -10px -10px 20px #dcdcda'
                }
            }else{
                state.MODE = 'dark'
                state.BG_COLOR = 'rgba(60,62,65)'
                state.BG_UP = 'linear-gradient(145deg, #404246, #36383b)'
                state.TEXT_COLOR = 'white'
                state.LINK_COLOR = 'lightgray'
                state.BIG_SHADOWS = {
                    'box-shadow': '#44484b -10px -10px 50px, #313234 10px 10px 50px'
                }
                state.BIG_INSET_SHADOWS = {
                    'box-shadow': 'inset #44484b -10px -10px 25px, inset #313234 10px 10px 25px'
                }
                state.SMALL_SHADOWS = {
                    'box-shadow': '#44484b -5px -5px 12px, #313234 5px 5px 20px'
                }
            }
        },
        setSound(state){
          if(state.SOUND === 'sound'){
              state.sound = 'noSound'
          }else{
              state.sound = 'sound'
          }
        },
        setTime(state, response){
          state.RESPONSE = response
        }
    },
    actions: {
        async GET_TIME({commit}, zone){
            await axios.get(`http://worldtimeapi.org/api/timezone/${zone[0]}/${zone[1]}`).then(response=>{
                commit('setTime', response)
            })
        },
        SET_SOUND(){
            this.commit('setSound')
        }
    },
});