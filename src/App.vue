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
  }
</script>

<style>

</style>