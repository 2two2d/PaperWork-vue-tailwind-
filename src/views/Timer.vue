<template>
  <div class="flex flex-col items-center justify-between w-[700px] h-[825px] m-[40px]">
    <timer-clock :minutes="minutes" :seconds="seconds" :milliseconds="milliseconds"></timer-clock>
    <div class="w-[400px] h-[400px] flex justify-between">
      <div class="flex justify-between items-center w-[140px] h-[60px]">
        <div class="flex flex-col items-center">
          <input :style="[{backgroundColor: $store.state.BG_COLOR}, {color: $store.state.TEXT_COLOR}]" @wheel="setMinutes" v-model="minutes" type="number" max="59" min="0" onkeypress="return false">
        </div>
        <p :style="{color: $store.state.TEXT_COLOR}">:</p>
        <div class="flex flex-col items-center">
          <input :style="[{backgroundColor: $store.state.BG_COLOR}, {color: $store.state.TEXT_COLOR}]"  @wheel="setSeconds" v-model="seconds" type="number" max="59" min="0" onkeypress="return false">
        </div>
      </div>
      <div class="flex justify-between w-[140px]">
        <div @click="startStop()" :style="$store.state.SMALL_SHADOWS" title="Старт/пауза" class="w-[60px] h-[60px] rounded-full btn flex items-center justify-around cursor-pointer">
          <img v-show="!play" src="@/assets/icons/img_play.png" alt="img" width="40" height="40">
          <img v-show="play" src="@/assets/icons/img_pause.png" alt="img" width="28" height="28">
        </div>
        <div @click="restart" :style="$store.state.SMALL_SHADOWS" title="Сброс" class="w-[60px] h-[60px] rounded-full btn flex items-center justify-around cursor-pointer">
          <img src="@/assets/icons/img_restart.png" alt="img" width="30" height="30">
        </div>
      </div>
    </div>
    <audio id="timerFinishSound" volume="0.3"><source src="@/assets/sounds/timer_finish_sound.mp3" type="audio/mp3"></audio>
    <audio id="timerSound" loop volume="0.2"><source src="@/assets/sounds/timer_sound.mp3" type="audio/mp3"></audio>
  </div>
</template>

<script>
import TimerClock from "@/components/TimerClock";

export default {
  name: "ClockTimer",
  components: {TimerClock},
  data(){
    return {
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      play: false,
      interval: null,
    }
  },
  methods: {
    setMinutes(el) {
      if(!this.play){
        el.deltaY > 1 ? this.minutes -= 1 : this.minutes += 1
        this.minutes === 60 ? this.minutes = 1 : ''
        this.minutes === -1 ? this.minutes = 59 : ''
      }
    },
    setSeconds(el) {
      if(!this.play) {
        el.deltaY > 1 ? this.seconds -= 1 : this.seconds += 1
        this.seconds === 60 ? this.seconds = 1 : ''
        this.seconds === -1 ? this.seconds = 59 : ''
      }
    },
    startStop(){
      if(this.minutes || this.seconds){
        if(!this.play){
          this.soundPlay('timerSound')
          this.play = !this.play
          if(this.milliseconds === 0){
            this.milliseconds = 1000
            this.seconds -= 1
            if(this.minutes === 1){
              this.minutes -= 1
              this.seconds = 59
            }
          }
          this.interval = setInterval(()=>{
            this.milliseconds -= 10
            if(this.milliseconds === 0){
              if(this.minutes === 0 && this.seconds === 0){
                clearInterval(this.interval)
                this.play = !this.play
                this.timerFinish()
                return true
              }
              if(this.seconds === 0 && this.minutes != 0){
                this.minutes -= 1
                this.seconds = 60
                this.milliseconds = 1000
              }
              this.milliseconds = 1000
              this.seconds -= 1
            }
          }, 10)
        }else{
          this.soundStop('timerSound')
          this.play = !this.play
          clearInterval(this.interval)
        }
      }
    },

    restart(){
      document.getElementById('timerSound').pause()
      clearInterval(this.interval)
      this.milliseconds = 0
      this.minutes = 0
      this.seconds = 0
      this.play ? this.play = false : ''
    },

    timerFinish(){
      this.$store.state.BG_TIMER_MARKS = 'springgreen'
      this.soundStop('timerSound')
      this.soundPlay('timerFinishSound')
      setTimeout(()=>{
        this.$store.state.BG_TIMER_MARKS = 'dodgerblue'
      }, 500)
    },

    soundPlay(tagId){
      if(localStorage.sound === 'sound'){
        document.getElementById(tagId).play()
      }
    },

    soundStop(tagId){
      document.getElementById(tagId).pause()
    }
  },
  beforeMount() {
    localStorage.timerMinutes ? this.minutes = Number(localStorage.timerMinutes) : this.minutes = 0
    localStorage.timerSeconds ? this.seconds = Number(localStorage.timerSeconds): this.seconds = 0
    localStorage.timerMilliseconds ? this.milliseconds = Number(localStorage.timerMilliseconds): this.milliseconds = 0
  },
  beforeUnmount() {
    localStorage.timerMinutes = this.minutes
    localStorage.timerSeconds = this.seconds
    localStorage.timerMilliseconds = this.milliseconds
  }
}
</script>

<style scoped>
  input[type=number]{
    font-size: 24px;
    width: 60px;
    height: 60px;
    text-align: center;
    padding-left: 12px;
    border-radius: 10px;
    border: 3px solid dodgerblue;
    color: dodgerblue;
  }
  .btn{
    background: linear-gradient(145deg, #209fff, #1b82e6);
  }
  .btn:hover{
    background: linear-gradient(145deg, #1b82e6, #209aff);
  }
  @keyframes finishTimer {
    from{
      background-color: lightgreen;
    }to{
      background-color: dodgerblue;
    }

  }
</style>