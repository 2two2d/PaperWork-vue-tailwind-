<template>
  <div id="main" class="flex flex-col items-center justify-around w-full h-[200px] mt-6">
    <div class="w-[500px] h-[74px] rounded-full flex justify-between items-center bg-gray-300 border-[6px] border-gray-300" id="nav">
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
    <card v-if="WorldTime_is_opened"/>
    <SecondComponent v-if="StopWatch_is_opened"/>
    <ThirdComponent v-if="Timer_is_opened"/>
  </div>
</template>

<script>
  import '@/assets/css/tailwind.css'
  import cardComp from '@/components/WorldTime'
  import SecondComponent from '@/components/StopWatch'
  import ThirdComponent from '@/components/Timer'
  export default {
    components: {
      'card': cardComp,
      'SecondComponent': SecondComponent,
      'ThirdComponent': ThirdComponent,
    },
    data(){
      return {
        'WorldTime_is_opened': true,
        'StopWatch_is_opened': false,
        'Timer_is_opened': false,


      }
    },
    methods: {
      open_first_component(){
        this.WorldTime_is_opened = true
        this.StopWatch_is_opened = false
        this.Timer_is_opened = false
      },
      open_second_component(){
        this.WorldTime_is_opened = false
        this.StopWatch_is_opened = true
        this.Timer_is_opened = false
      },
      open_third_component(){
        this.WorldTime_is_opened = false
        this.StopWatch_is_opened = false
        this.Timer_is_opened = true
      }
    }
  }
</script>

<style scoped>
  p{
    font-weight: 600;
    color: rgb(70,70,70)
  }
  #nav{
    box-shadow: rgba(255,255,255,.2) 5px 5px 5px, rgba(0,0,0,.1) -5px -5px 5px, inset rgba(255,255,255,.2) 5px 5px 5px, inset rgba(0,0,0,.1) -5px -5px 5px;
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