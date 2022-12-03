<template>
  <div id="main" class="flex flex-col items-center justify-around w-full h-[200px] mt-6">
    <div class="w-[500px] h-[50px] bg-blue-200 rounded-xl flex justify-around items-center">
      <button class="head_button" v-on:click="">button</button>
      <button class="head_button" v-on:click="">button</button>
      <button class="head_button" v-on:click="">button</button>
    </div>
    <card/>
    <SecondComponent/>
    <ThirdComponent/>
  </div>
</template>

<script>
  import '@/assets/css/tailwind.css'
  import cardComp from '@/components/FirstComponent'
  import SecondComponent from '@/components/SecondComponent'
  import ThirdComponent from '@/components/ThirdComponent'
  export default {
    components: {
      'card': cardComp,
      'SecondComponent': SecondComponent,
      'ThirdComponent': ThirdComponent,
    },
    methods: {
      nav_to:function(which_component){

      }
    }
  }
</script>
