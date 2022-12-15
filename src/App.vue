<template>
  <div id="main" class="flex flex-col items-center justify-around w-full h-[200px] mt-6">
    <HeaderNav/>

  </div>
<!--  <router-view></router-view>-->
</template>

<script>
  import '@/assets/css/tailwind.css'
  import HeaderNav from '@/components/HeaderNav'

  export default {
    name: 'App',

    components: {
      HeaderNav
    },
    // data(){
    //   return {
    //     'WorldTime_is_opened': true,
    //     'StopWatch_is_opened': false,
    //     'Timer_is_opened': false,
    //   }
    // },
    // methods: {
    //   open_first_component(){
    //     this.WorldTime_is_opened = true
    //     this.StopWatch_is_opened = false
    //     this.Timer_is_opened = false
    //   },
    //   open_second_component(){
    //     this.WorldTime_is_opened = false
    //     this.StopWatch_is_opened = true
    //     this.Timer_is_opened = false
    //   },
    //   open_third_component(){
    //     this.WorldTime_is_opened = false
    //     this.StopWatch_is_opened = false
    //     this.Timer_is_opened = true
    //   }
    // }
  }
</script>

<style scoped>

</style>