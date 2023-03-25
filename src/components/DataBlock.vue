<template>
  <div class="w-[220px] h-[400px] flex items-center justify-between rounded-3xl">
    <div v-if="!response_text" class="h-[100px] flex flex-col justify-between">
      <p v-if="!validation_error" class="text-orange-600 text-[16px]">Регион не выбран</p>
      <p v-else class="text-orange-600 text-[16px]">{{validation_error}}</p>
      <hr>
      <p :style="{color: $store.state.TEXT_COLOR}">Выставлено системное время</p>
    </div>
    <div v-else class="h-full flex flex-col justify-around text-white">
      <p :style="{color: $store.state.TEXT_COLOR}">День недели: <span>{{response_text.day_of_week}}</span></p>
      <hr>
      <p :style="{color: $store.state.TEXT_COLOR}">День года: <span>{{response_text.day_of_year}}</span></p>
      <hr>
      <p :style="{color: $store.state.TEXT_COLOR}">Номер недели: <span>{{response_text.week_number}}</span></p>
      <hr>
      <p :style="{color: $store.state.TEXT_COLOR}">UTF: <span>{{response_text.utc_offset}}</span></p>
      <hr>
      <p :style="{color: $store.state.TEXT_COLOR}">Временая зона: <span>{{response_text.timezone}}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataBlock",
  props: ['response_text', 'validation_error'],
}
</script>

<style scoped>
  .data_blocks{
    box-shadow: rgba(255,255,255,.05) -5px -5px 12px, rgba(0,0,0,.15) 5px 5px 12px;
  }
  span{
    color: dodgerblue;
    font-weight: 600;
  }
  hr{
    border: 1px solid gray;
  }
</style>