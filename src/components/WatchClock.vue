<template>
  <div class="w-[400px] h-[400px] bg-[rgba(60,62,65)] rounded-full flex items-center justify-center" id="clock">
    <p class="text-white text-xl">{{seconds}}</p>
    <div class="absolute w-[30px] h-[30px] rounded-full second_pointer" :style="{'rotate': seconds*6 + 'deg'}"></div>
  </div>
</template>

<script>
export default {
  name: "WatchClock",
  props: ['time_text', 'seconds'],
}
</script>

<style scoped>
  #clock{
    box-shadow: rgba(255,255,255,.1) -5px -5px 15px, rgba(0,0,0,.2) 5px 5px 15px;
  }
  .second_pointer{
    translate: 0 -185px;
    transform-origin: 15px 200px;
    background-color: dodgerblue;
    box-shadow: dodgerblue 0 0 6px, dodgerblue 0 0 15px;
  }
</style>