<template>
  <div :style="[{backgroundColor: $store.state.BG_COLOR}, $store.state.BIG_SHADOWS]" class="w-[400px] h-[400px] rounded-full flex items-center justify-center" id="clock">
    <div :style="[{backgroundColor: $store.state.BG_COLOR}, $store.state.BIG_INSET_SHADOWS]" class="w-[360px] h-[360px] absolute rounded-full circle"></div>
    <div :style="[{backgroundColor: $store.state.BG_COLOR}, $store.state.BIG_INSET_SHADOWS]" class="w-[300px] h-[300px] absolute rounded-full circle"></div>
    <div class="z-10 flex flex-col items-center justify-between">
      <p :style="{color: $store.state.TEXT_COLOR}" class="text-gray-300 text-[30px]">
        {{(String(minutes).length === 1 ? '0' + minutes : minutes)
      +':'+(String(seconds).length === 1 ? '0' + seconds : seconds)
      +','+(String(milliseconds).length === 1 ? '00' : String(milliseconds).slice(0,2))}}
      </p>
    </div>
    <div class="absolute w-[30px] h-[30px] rounded-full pointer" :style="{'rotate': seconds*6 + milliseconds/1000*6 + 'deg'}"></div>
    <div class="absolute center mr-[20px] mb-[5px]">
      <div v-for="i in splittings" v-bind:key="i" class="w-[20px] h-[5px] absolute center translate-x-[190px] bg-[dodgerblue]" :style="{rotate: i*30 + 'deg'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimerClock",
  props: ['time_text', 'milliseconds', 'seconds', 'minutes', 'checked'],
  computed: {
    splittings: function(){
      let splittings = []
      for(let i = 0; i < 12; i++){
        splittings.push(i)
      }
      return splittings
    },

    minutSplittings: function(){
      return 0
    }
  }
}
</script>

<style scoped>
.pointer{
  translate: 0 -165px;
  transform-origin: 15px 180px;
  background-color: transparent;
  border: 4px solid dodgerblue;
}
</style>