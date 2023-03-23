<template>
  <div :style="[{backgroundColor: $store.state.BG_COLOR}, $store.state.BIG_SHADOWS]" class="w-[400px] h-[400px] rounded-full flex items-center justify-center" id="clock">
    <div :style="[{backgroundColor: $store.state.BG_COLOR}, $store.state.BIG_INSET_SHADOWS]" class="w-[360px] h-[360px] absolute rounded-full circle"></div>
    <div :style="[{backgroundColor: $store.state.BG_COLOR}, $store.state.BIG_INSET_SHADOWS]" class="w-[300px] h-[300px] absolute rounded-full circle"></div>
    <div class="z-10 flex flex-col items-center justify-between">
      <div class="w-[60px] h-[60px] ml-[45px] mb-[30px]">
        <div v-for="i in [5,10,15,20,25,30]" v-bind:key="i" :style="{rotate: i*12-90 + 'deg', color: $store.state.TEXT_COLOR}" class="w-[20px] h-[20px] absolute center translate-x-[35px] flex items-center">
          <p :style="{rotate: -i*12+90 + 'deg'}" class="block w-[20px] h-[20px] text-center">{{i}}</p>
        </div>
        <div :style="{rotate: -90 + minutes*12 + seconds/5 + 'deg'}" class="w-[20px] h-[5px] rounded-full bg-[dodgerblue] relative top-[10px] translate-x-[10px]"></div>
      </div>
      <p :style="{color: $store.state.TEXT_COLOR}" class="text-gray-300 text-[30px]">
        {{(String(minutes).length === 1 ? '0' + minutes : minutes)
      +':'+(String(seconds).length === 1 ? '0' + seconds : seconds)
      +','+(String(milliseconds).length === 1 ? '00' : String(milliseconds).slice(0,2))}}
      </p>
    </div>
    <div class="absolute w-[30px] h-[30px] rounded-full pointer" :style="{'rotate': seconds*6 + milliseconds/1000*6 + 'deg'}"></div>
    <div v-show="checked" class="absolute center mr-[20px] mb-[5px]">
      <div v-for="i in splittings" v-bind:key="i" class="w-[20px] h-[5px] absolute center translate-x-[190px] bg-[dodgerblue]" :style="{rotate: i*30 + 'deg'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WatchClock",
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