<template>
  <div id="main" class="flex flex-col items-center justify-around w-full h-[200px] mt-6">
    <div class="w-[500px] h-[60px] bg-gray-300 rounded-full flex justify-around items-center">
      <div class="group w-[70px] h-[50px] flex flex-col items-center hover:cursor-pointer header_button"
           v-bind:class="{active:WorldTime_is_opened}" v-on:click="open_first_component">
        <div id="img_wrapper">
          <img src="@/assets/icons/img_time.png" alt="icon" class="w-[25px] h-[25px]">
        </div>
        <p class="group-hover:text-emerald-500">Время</p>
      </div>
      <div class="group w-[60px] h-[40px] flex flex-col items-center hover:cursor-pointer header_button"
           v-bind:class="{active:StopWatch_is_opened}" v-on:click="open_second_component">
          <div id="img_wrapper">
            <img src="@/assets/icons/img_timer.svg" alt="icon" class="w-[25px] h-[25px]">
          </div>
        <p class="group-hover:text-emerald-500">Таймер</p>
      </div>
      <div class="group w-[60px] h-[40px] flex flex-col items-center hover:cursor-pointer header_button"
           v-bind:class="{active:Timer_is_opened}" v-on:click="open_third_component">
        <div id="img_wrapper">
          <img src="@/assets/icons/img_stopwatch.svg" alt="icon" class="w-[25px] h-[25px]">
        </div>
        <p class="group-hover:text-emerald-500">Секундомер</p>
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
  .active > #img_wrapper{
    position: relative;
    bottom: 20px;
    background: green;
    border-radius: 100%;
    border: solid 5px green;
    outline: solid 10px white;
    transition: 0.4s;
  }
</style>