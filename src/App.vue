<template>
  <div id="main" class="flex flex-col items-center justify-around w-full h-[200px] mt-6">
    <div class="w-[500px] h-[50px] bg-blue-200 rounded-xl flex justify-around items-center">
      <button class="head_button" v-on:click="open_first_component">button</button>
      <button class="head_button" v-on:click="open_second_component">button</button>
      <button class="head_button" v-on:click="open_third_component">button</button>
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
        'Timer_is_opened': false
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
