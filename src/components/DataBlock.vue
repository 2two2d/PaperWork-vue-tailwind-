<template>
  <div class="w-[400px] flex items-center justify-between">
    <p></p>
  </div>
</template>

<script>
export default {
  name: "DataBlock",
  props: ['response_text']
}
</script>

<style scoped>
  .data_blocks{
    box-shadow: rgba(255,255,255,.05) -5px -5px 12px, rgba(0,0,0,.2) 5px 5px 12px;
  }
</style>