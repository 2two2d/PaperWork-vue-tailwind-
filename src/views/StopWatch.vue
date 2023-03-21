<template>
  <div class="flex flex-col items-center justify-around h-[600px] ">
    <watch-clock v-bind:milliseconds="20" v-bind:seconds="30" v-bind:minutes="40" v-bind:checked="true"></watch-clock>
    <div class="w-[600px] h-[50px] flex justify-between">
      <div :style="$store.state.SMALL_SHADOWS" class="w-[150px] h-[60px] rounded-full btn"></div>
      <div :style="$store.state.SMALL_SHADOWS" class="w-[150px] h-[60px] rounded-full btn"></div>
      <div :style="$store.state.SMALL_SHADOWS" class="w-[150px] h-[60px] rounded-full btn"></div>
    </div>
  </div>

</template>

<script>
  import WatchClock from "@/components/WatchClock";

  export default {
    name: "StopWatch",
    components: {WatchClock}
  }
</script>

<style scoped>
  .btn{
    background: linear-gradient(145deg, #209fff, #1b82e6);
  }
  .btn:hover{
    background: linear-gradient(145deg, #1b82e6, #209aff);
  }
</style>