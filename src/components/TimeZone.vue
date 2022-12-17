<template>
  <div class="w-[700px] h-[30px] flex items-center justify-between">
    <div>
      <select name="" id="zone" class="w-[200px] h-[30px] rounded-full text-center outline-0 focus-visible:bg-amber-200">
        <option value="">Asia</option>
        <option value="">Africa</option>
        <option value="">Australia</option>
        <option value="">Europe</option>
        <option value="">North America</option>
        <option value="">South America</option>
      </select>
    </div>
    <div>
      <img src="@/assets/icons/img_search.png" alt="img" width="22" height="22" class="absolute ml-[170px] mt-[3px] invert-[0.8] hover:cursor-pointer">
      <input v-model="timezone_city" v-on:keydown.enter="show_time" type="text" class="w-[200px] h-[30px] rounded-full border-2 border-gray-300 bg-[rgba(60,62,65)] outline-0 text-white pl-2 pr-10" placeholder="Город">
    </div>
    <div class="btn w-[200px] h-[30px] rounded-full pt-0.5 bg-[dodgerblue] hover:cursor-pointer">
      <p class="text-center text-white">Выбрать местное время</p>
    </div>
  </div>
</template>

<script>
import {set_time} from '@/views/WorldTime'
export default {
  name: "TimeZone",
  data(){
    return {
      timezone_city: '',
    }
  },
  methods: {
    show_time(){
      set_time(this.timezone_city)
    }
  }
}
</script>

<style scoped>
  .blck{
    box-shadow: rgba(255,255,255,.05) -5px -5px 12px, rgba(0,0,0,.2) 5px 5px 12px;
  }
  .btn{
    box-shadow: dodgerblue 0 0 6px, dodgerblue 0 0 15px;
  }
  select{
    -webkit-appearance: none;
    -moz-appearance: none;
  }
</style>