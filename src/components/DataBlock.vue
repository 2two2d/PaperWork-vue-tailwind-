<template>
  <div class="w-[200px] h-[400px] flex items-center justify-between rounded-3xl">
    <div v-if="!response_text" class="h-[100px] flex flex-col justify-between">
      <p class="text-orange-600 text-[20px]">Регион не выбран</p>
      <hr>
      <p class="text-white">Выставлено системное время</p>
    </div>
    <div v-else class="h-full flex flex-col justify-around text-white">
      <p :style="{color: $store.state.TEXT_COLOR}">День недели: <span>{{day_of_week}}</span></p>
      <hr>
      <p :style="{color: $store.state.TEXT_COLOR}">День года: <span>{{day_of_year}}</span></p>
      <hr>
      <p :style="{color: $store.state.TEXT_COLOR}">Номер недели: <span>{{week_number}}</span></p>
      <hr>
      <p :style="{color: $store.state.TEXT_COLOR}">UTF: <span>{{utc_offset}}</span></p>
      <hr>
      <p :style="{color: $store.state.TEXT_COLOR}">Временая зона: <span>{{time_zone}}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataBlock",
  props: ['response_text'],
  data(){
    return{
      day_of_week: '',
      day_of_year: '',
      week_number: '',
      utc_offset: '',
      time_zone: '',
    }
  },
  watch: {
    response_text: function (){
      let raw_data_arr = this.response_text.split(',')
      this.day_of_week = raw_data_arr[3].split(':')[1]
      this.day_of_year = raw_data_arr[4].split(':')[1]
      this.week_number = raw_data_arr[14].split(':')[1].slice(0,-1)
      this.utc_offset = raw_data_arr[13].split(':')[1].slice(1)
      this.time_zone = raw_data_arr[10].split(':')[1].slice(1,-1)
    }
  }
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