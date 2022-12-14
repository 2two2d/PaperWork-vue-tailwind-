<template>
  <div>
    <div class="w-[500px] h-[74px] rounded-full flex justify-between items-center bg-[rgba(225,225,240)] border-[6px] border-[rgba(225,225,240)]" id="nav">
      <div class="group w-[135px] h-[74px] rounded-[40px] flex flex-col items-center justify-center hover:cursor-pointer relative right-2"
           v-bind:class="{active:WorldTime_is_opened}" v-on:click="open_first_component">
        <div id="img_wrapper">
          <img src="@/assets/icons/img_time.png" alt="icon" class="w-[25px] h-[25px] group-hover:invert transition">
        </div>
        <p class="group-hover:text-white transition">Время</p>
      </div>
      <div class="group w-[135px] h-[74px] rounded-[40px] flex flex-col items-center justify-center hover:cursor-pointer"
           v-bind:class="{active:StopWatch_is_opened}" v-on:click="open_second_component">
        <div id="img_wrapper">
          <img src="@/assets/icons/img_timer.svg" alt="icon" class="w-[25px] h-[25px] group-hover:invert transition">
        </div>
        <p class="group-hover:text-white transition">Таймер</p>
      </div>
      <div class="group w-[135px] h-[74px] rounded-[40px] flex flex-col items-center justify-center hover:cursor-pointer relative left-2"
           v-bind:class="{active:Timer_is_opened}" v-on:click="open_third_component">
        <div id="img_wrapper">
          <img src="@/assets/icons/img_stopwatch.svg" alt="icon" class="w-[25px] h-[25px] group-hover:invert transition">
        </div>
        <p class="group-hover:text-white transition">Секундомер</p>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "HeaderNav"
}
</script>

<style scoped>
  p{
    font-weight: 600;
    color: rgb(70,70,70)
  }
  #nav{
    box-shadow: rgba(255,255,255,.5) -5px -5px 12px, rgba(0,0,0,.15) 5px 5px 12px;
  }
  .active{
    background-color: dodgerblue;
    box-shadow: dodgerblue 0 0 6px, dodgerblue 0 0 20px;
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