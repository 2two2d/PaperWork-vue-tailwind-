<template>
  <div class="flex flex-col items-center justify-around h-[600px] ">
    <stopwatch-clock v-bind:milliseconds="milliseconds" v-bind:seconds="Math.floor(seconds)" v-bind:minutes="Math.floor(minutes)" v-bind:checked="true"></stopwatch-clock>
    <div class="w-[600px] h-[50px] flex justify-between">
      <div @click="restart" :style="$store.state.SMALL_SHADOWS" class="w-[150px] h-[60px] rounded-full btn flex items-center justify-around cursor-pointer">
        <img src="@/assets/icons/img_restart.png" alt="img" width="30" height="30">
      </div>
      <div @click="play=!play; startStop()" :style="$store.state.SMALL_SHADOWS" class="w-[150px] h-[60px] rounded-full btn flex items-center justify-around cursor-pointer">
        <img v-show="!play" src="@/assets/icons/img_play.png" alt="img" width="40" height="40">
        <img v-show="play" src="@/assets/icons/img_pause.png" alt="img" width="28" height="28">
      </div>
      <div :style="$store.state.SMALL_SHADOWS" class="w-[150px] h-[60px] rounded-full btn flex items-center justify-around cursor-pointer">
        <img src="@/assets/icons/img_timer.svg" alt="img" width="30" height="30" class="filter invert">
      </div>
    </div>
  </div>

</template>

<script>
  import StopwatchClock from "@/components/StopwatchClock";

  export default {
    name: "StopWatch",
    components: {StopwatchClock},
    data(){
      return{
        play: false,
        milliseconds: 0,
        seconds: 0,
        minutes: 0,
        interval: 0,
      }
    },
    methods: {
      startStop(){
        if(this.play === true){
          this.interval = setInterval(()=>{
            this.milliseconds += 10
            if(this.milliseconds === 1000){
              this.milliseconds = 0
              this.seconds += 1
              this.minutes += 1/60
            }
            if(this.seconds === 60){
              this.seconds = 0
            }
          }, 10)
        }else{
          clearInterval(this.interval)
        }
      },

      restart(){
        clearInterval(this.interval)
        this.milliseconds = 0
        this.minutes = 0
        this.seconds = 0
        this.play ? this.play = false : ''
      }
    },
    beforeMount(){
      this.milliseconds = Number(localStorage.milliseconds)
      this.seconds = Number(localStorage.seconds)
      this.minutes = Number(localStorage.minutes)
    },
    beforeUnmount() {
      localStorage.milliseconds = this.milliseconds
      localStorage.seconds = this.seconds
      localStorage.minutes = this.minutes
    }
  }
</script>

<style scoped>
  .btn{
    background: linear-gradient(145deg, #209fff, #1b82e6);
  }
  .btn:hover{
    background: linear-gradient(145deg, #1b82e6, #209aff);
  }
</style>