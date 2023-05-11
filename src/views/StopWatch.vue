<template>
  <div class="flex items-start justify-between w-[700px] m-[40px] h-[825px]">
    <stopwatch-clock v-bind:milliseconds="milliseconds" v-bind:seconds="Math.floor(seconds)" v-bind:minutes="Math.floor(minutes)" v-bind:checked="true"></stopwatch-clock>
    <div class="flex flex-col">
      <div class="w-[240px] h-[50px] flex justify-between">
        <div @click="restart" :style="$store.state.SMALL_SHADOWS" title="Сброс" class="w-[60px] h-[60px] rounded-full btn flex items-center justify-around cursor-pointer">
          <img src="@/assets/icons/img_restart.png" alt="img" width="30" height="30">
        </div>
        <div @click="play=!play; startStop()" :style="$store.state.SMALL_SHADOWS" title="Старт/пауза" class="w-[60px] h-[60px] rounded-full btn flex items-center justify-around cursor-pointer">
          <img v-show="!play" src="@/assets/icons/img_play.png" alt="img" width="40" height="40">
          <img v-show="play" src="@/assets/icons/img_pause.png" alt="img" width="28" height="28">
        </div>
        <div @click="setMark" :style="$store.state.SMALL_SHADOWS" title="Зафиксировать время" class="w-[60px] h-[60px] rounded-full btn flex items-center justify-around cursor-pointer">
          <img src="@/assets/icons/img_timer.svg"  alt="img" width="30" height="30" class="filter invert">
        </div>
      </div>
      <div v-show="marks.length" id="marksBlock" class="w-[240px] h-[300px] overflow-y-scroll overflow-x-hidden mt-5">
        <div v-for="i in marks" :key="key = marks.indexOf(i)" class="w-[200px] h-[40px] flex flex-col justify-between mt-[10px]">
          <hr class="bg-[gray] border-[gray] h-[2px]">
          <div class="flex justify-between">
            <p class="text-[dodgerblue] text-[16px]">{{key + 1}}.</p>
            <p class="text-[dodgerblue] text-[16px]">время - {{i}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <audio id="stopwatchSound" loop><source src="@/assets/sounds/stopwatch_sound.mp3" type="audio/mp3"></audio>
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
        marks: [],
      }
    },
    methods: {
      startStop(){
        if(this.play === true){
          this.soundPlay('stopwatchSound')
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
          this.soundStop('stopwatchSound')
          clearInterval(this.interval)
        }
      },
      restart(){
        this.soundStop('stopwatchSound')
        clearInterval(this.interval)
        this.milliseconds = 0
        this.minutes = 0
        this.seconds = 0
        this.marks = []
        this.play ? this.play = false : ''
      },
      setMark(){
        let timeMark = `${String(Math.floor(this.minutes)).length === 1 ? '0' + Math.floor(this.minutes) : Math.floor(this.minutes)}:
                        ${String(Math.floor(this.seconds)).length === 1 ? '0' + Math.floor(this.seconds) : Math.floor(this.seconds)}:
                        ${String(Math.floor(this.milliseconds)).length === 1 ? '00' : String(Math.floor(this.milliseconds)).slice(0,2)}`.replace(/\s/g, "")
        if(timeMark.length === 0 || timeMark !== this.marks[this.marks.length-1]){
          this.marks.push(timeMark)
        }
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
  #marksBlock::-webkit-scrollbar{
    width: 8px;
    background-color: gray;
    border-radius: 4px;
  }
  #marksBlock::-webkit-scrollbar-thumb {
    display: block;
    width: 4px;
    height: 8px;
    border-radius: 5px;
    background-color: dodgerblue;
  }
</style>