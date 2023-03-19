<template>
  <div :style="{backgroundColor: $store.state.BG_COLOR}" class="w-[400px] h-[400px] rounded-full flex items-center justify-center" id="clock">
    <div :style="{backgroundColor: $store.state.BG_COLOR}" class="w-[360px] h-[360px] absolute rounded-full circle"></div>
    <div :style="{backgroundColor: $store.state.BG_COLOR}" class="w-[300px] h-[300px] absolute rounded-full circle"></div>
    <div :style="{backgroundColor: $store.state.BG_COLOR}" class="w-[240px] h-[240px] absolute rounded-full circle"></div>
    <p :style="{color: $store.state.TEXT_COLOR}" class="text-gray-300 text-[30px] z-10">{{hours+':'+minutes+':'+seconds}}</p>
    <div class="absolute w-[30px] h-[30px] rounded-full pointer" :style="{'rotate': seconds*6 + milliseconds/200 + 'deg'}">
      <p :style="{rotate: -(seconds*6 + milliseconds/200) + 'deg', color: $store.state.TEXT_COLOR}" class="text-gray-200 transform -translate-x-[70px] z-20">Секунды</p>
    </div>
    <div class="absolute w-[30px] h-[30px] rounded-full pointer" :style="{'rotate': minutes*6 + seconds/10 + milliseconds/10000 + 'deg'}">
      <p :style="{rotate: -(minutes*6 + seconds/10 + milliseconds/10000) + 'deg', color: $store.state.TEXT_COLOR}" class="text-gray-200 transform -translate-x-[65px] z-10">Минуты</p>
    </div>
    <div class="absolute w-[30px] h-[30px] rounded-full pointer" :style="{'rotate': hours*30 + minutes/2 + 'deg'}">
      <p :style="{rotate: -(hours*30 + minutes/2) + 'deg', color: $store.state.TEXT_COLOR}" class="text-gray-200 transform -translate-x-[40px] z-10">Часы</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WatchClock",
  props: ['time_text', 'milliseconds', 'seconds', 'minutes', 'hours'],
}
</script>

<style scoped>
  #clock{
    box-shadow: rgba(255,255,255,.05) -10px -10px 25px, rgba(0,0,0,.15) 10px 10px 25px;
  }
  .pointer:nth-child(5){
    translate: 0 -165px;
    transform-origin: 15px 180px;
    background-color: dodgerblue;
    box-shadow: dodgerblue 0 0 6px, dodgerblue 0 0 15px;
  }
  .pointer:nth-child(6){
    translate: 0 -135px;
    transform-origin: 15px 150px;
    background-color: dodgerblue;
    box-shadow: dodgerblue 0 0 6px, dodgerblue 0 0 15px;
  }
  .pointer:nth-child(7){
    translate: 0 -105px;
    transform-origin: 15px 120px;
    background-color: dodgerblue;
    box-shadow: dodgerblue 0 0 6px, dodgerblue 0 0 15px;
  }
  .circle{
    box-shadow: inset rgba(255,255,255,.05) -10px -10px 25px, inset rgba(0,0,0,.15) 10px 10px 25px;
  }
</style>