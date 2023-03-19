<template>
  <div class="mb-[-40px]">
    <div :style="{backgroundColor: $store.state.BG_COLOR, borderColor: $store.state.BG_COLOR}" class="w-[700px] h-[74px] rounded-full flex justify-between items-center border-[6px] mt-5" id="nav">
      <router-link to="worldtime">
        <div class="nav_btn group w-[135px] h-[74px] rounded-[40px] flex flex-col items-center justify-center hover:cursor-pointer relative right-2"
             v-bind:class="{active:firstBtn_glow}" v-on:click="firstBtn_click">
            <img src="@/assets/icons/img_time.png" alt="icon" class="w-[25px] h-[25px] invert-[70%] transition">
          <p class="text-gray-400 group-hover:text-white transition">Время</p>
        </div>
      </router-link>
      <router-link to="stopwatch">
        <div class="nav_btn group w-[135px] h-[74px] rounded-[40px] flex flex-col items-center justify-center hover:cursor-pointer"
             v-bind:class="{active:secondBtn_glow}" v-on:click="secondBtn_click">
            <img src="@/assets/icons/img_timer.svg" alt="icon" class="w-[25px] h-[25px] invert-[70%] transition">
          <p class="text-gray-400 group-hover:text-white transition">Таймер</p>
        </div>
      </router-link>
      <router-link to="timer" v-on:click="thirdBtn_click">
        <div class="nav_btn group w-[135px] h-[74px] rounded-[40px] flex flex-col items-center justify-center hover:cursor-pointer relative left-2"
             v-bind:class="{active:thirdBtn_glow}">
            <img src="@/assets/icons/img_stopwatch.svg" alt="icon" class="w-[25px] h-[25px] invert-[70%] transition">
          <p class="text-gray-400 group-hover:text-white transition">Секундомер</p>
        </div>
      </router-link>
    </div>
    <settings-block class="relative left-[700px] bottom-[85px]"></settings-block>
  </div>
</template>

<script>

import SettingsBlock from "@/components/SettingsBlock";

export default {
  name: "HeaderNav",
  components: {
    SettingsBlock
  },
  data() {
    return{
      firstBtn_glow: true,
      secondBtn_glow: false,
      thirdBtn_glow: false,
    }
  },
  methods: {
    firstBtn_click(){
      this.firstBtn_glow = true
      this.secondBtn_glow = false
      this.thirdBtn_glow = false
    },
    secondBtn_click(){
      this.firstBtn_glow = false
      this.secondBtn_glow = true
      this.thirdBtn_glow = false
    },
    thirdBtn_click(){
      this.firstBtn_glow = false
      this.secondBtn_glow = false
      this.thirdBtn_glow = true
    }
  }
}
</script>

<style scoped>
  p{
    font-weight: 600;

  }
  #nav{
    box-shadow: rgba(255,255,255,.05) -5px -5px 12px, rgba(0,0,0,.2) 5px 5px 20px;
  }

  .nav_btn:hover img{
    filter: invert(100%);
  }

  .active{
    background-color: dodgerblue;
    box-shadow: dodgerblue 0 0 6px, dodgerblue 0 0 15px;
    transition: 0.2s;
  }
  .active > p{
    color: white;
  }
  .active img{
    filter: invert();
    width: 30px;
    height: 30px;
    transition: 0.2s;
  }
</style>