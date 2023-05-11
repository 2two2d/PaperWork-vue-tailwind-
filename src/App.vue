<template>
  <div :style="{backgroundColor: this.$store.state.BG_COLOR}" id="main" class="flex flex-col items-center w-full">
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
  }
</script>

<style>

</style>