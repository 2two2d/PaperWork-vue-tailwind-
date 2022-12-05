<template>
  <div id="main" class="flex flex-col items-center justify-around w-full h-[200px] mt-6">
    <div class="w-[500px] h-[50px] bg-blue-200 rounded-xl flex justify-around items-center">
      <button class="head_button">button</button>
      <button class="head_button">button</button>
      <button class="head_button">button</button>
    </div>
    <card v-if="first_component_is_opened"/>
    <SecondComponent v-if="second_component_is_opened"/>
    <ThirdComponent v-if="third_component_is_opened"/>
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
    data(){
      return {
        'first_component_is_opened': true,
        'second_component_is_opened': false,
        'third_component_is_opened': false
      }
    },
    methods: {
      open_first_component(){
        this.first_component_is_opened = true
        this.second_component_is_opened = false
        this.third_component_is_opened = false
      },
      open_second_component(){
        this.first_component_is_opened = false
        this.second_component_is_opened = true
        this.third_component_is_opened = false
      },
      open_third_component(){
        this.first_component_is_opened = false
        this.second_component_is_opened = false
        this.third_component_is_opened = true
      }
    }
  }
</script>
