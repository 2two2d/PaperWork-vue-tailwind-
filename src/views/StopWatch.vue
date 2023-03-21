<template>
  <div class="flex flex-col items-center justify-around h-[600px] ">
    <watch-clock v-bind:milliseconds="milliseconds" v-bind:seconds="Math.floor(seconds)" v-bind:minutes="Math.floor(minutes)" v-bind:checked="true"></watch-clock>
    <div class="w-[600px] h-[50px] flex justify-between">
      <div :style="$store.state.SMALL_SHADOWS" class="w-[150px] h-[60px] rounded-full btn flex items-center justify-around cursor-pointer">
        <img src="@/assets/icons/img_restart.png" alt="img" width="30" height="30">
      </div>
      <div @click="start" :style="$store.state.SMALL_SHADOWS" class="w-[150px] h-[60px] rounded-full btn flex items-center justify-around cursor-pointer">
        <img src="@/assets/icons/img_play.png" alt="img" width="40" height="40">
      </div>
      <div :style="$store.state.SMALL_SHADOWS" class="w-[150px] h-[60px] rounded-full btn flex items-center justify-around cursor-pointer">
        <img src="@/assets/icons/img_timer.svg" alt="img" width="30" height="30" class="filter invert">
      </div>
    </div>
  </div>

</template>

<script>
  import WatchClock from "@/components/WatchClock";

  export default {
    name: "StopWatch",
    components: {WatchClock},
    data(){
      return{
        milliseconds: '00',
        seconds: '00',
        minutes: '00',
      }
    },
    methods: {
      start(){
        this.milliseconds = 0
        this.seconds = 0
        this.minutes = 0
        let interval = setInterval(()=>{
          this.milliseconds += 100
          this.seconds += 1/10
          this.minutes += 1/600
        }, 100)
        console.log(interval)
      }
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