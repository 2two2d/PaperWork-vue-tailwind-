<template>
  <div id="main" class="flex justify-around flex-col items-center w-full">
    <HeaderNav/>
    <router-view></router-view>
  </div>
</template>

<script>
  import '@/assets/css/tailwind.css'
  import HeaderNav from '@/components/HeaderNav'

  export default {
    name: 'App',

    components: {
      HeaderNav
    },
    computed: {
      BG_COLOR: function(){
        return this.$store.state.BG_COLOR
      }
    }
  }
</script>

<style>
  body{
    background-color: v-bind(BG_COLOR);
  }
</style>