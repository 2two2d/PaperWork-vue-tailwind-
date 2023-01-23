<template>
  <div class="w-[700px] h-[80px] flex flex-wrap justify-between">
    <div class="w-[700px] flex justify-between">
      <div>
        <input type="radio" id="radio_asia" name="radio" class="peer hidden" value="Asia" checked v-model="continent">
        <label for="radio_asia" class="text-gray-400 hover:text-white peer-checked:text-[dodgerblue] peer-checked:text-xl hover:cursor-pointer transition">Азия</label>
      </div>
      <div>
        <input type="radio" id="radio_europe" name="radio" class="peer hidden" value="Europe" v-model="continent">
        <label for="radio_europe" class="text-gray-400 hover:text-white peer-checked:text-[dodgerblue] peer-checked:text-xl hover:cursor-pointer transition">Европа</label>
      </div>
      <div>
        <input type="radio" id="radio_south_america" name="radio" class="peer hidden" value="South_America" v-model="continent">
        <label for="radio_south_america" class="text-gray-400 hover:text-white peer-checked:text-[dodgerblue] peer-checked:text-xl hover:cursor-pointer transition">Южная Америка</label>
      </div>
      <div>
        <input type="radio" id="radio_north_america" name="radio" class="peer hidden" value="North_America" v-model="continent">
        <label for="radio_north_america" class="text-gray-400 hover:text-white peer-checked:text-[dodgerblue] peer-checked:text-xl hover:cursor-pointer transition">Северная Америка</label>
      </div>
      <div>
        <input type="radio" id="radio_australia" name="radio" class="peer hidden" value="Australia" v-model="continent">
        <label for="radio_australia" class="text-gray-400 hover:text-white peer-checked:text-[dodgerblue] peer-checked:text-xl hover:cursor-pointer transition">Австралия</label>
      </div>
      <div>
        <input type="radio" id="radio_africa" name="radio" class="peer hidden" value="Africa" v-model="continent">
        <label for="radio_africa" class="text-gray-400 hover:text-white peer-checked:text-[dodgerblue] peer-checked:text-xl hover:cursor-pointer transition">Африка</label>
      </div>
    </div>
    <div class="w-[200px]">
      <img src="@/assets/icons/img_search.png" alt="img" width="22" height="22" class="absolute ml-[170px] mt-[3px] invert-[0.8] hover:cursor-pointer" id="search_img">
      <input v-model="city" v-on:keydown.enter="set_time" type="text" class="w-[200px] h-[30px] rounded-full border-2 border-gray-400 bg-[rgba(60,62,65)] outline-0 text-white text-center focus:placeholder-[dodgerblue]" id="search_input" placeholder="Город">
    </div>
    <div v-on:click="$refs.WorldTime.set_time(this.continent, this.city)" class="btn w-[200px] h-[30px] rounded-full pt-0.5 bg-[dodgerblue] hover:cursor-pointer">
      <p class="text-center text-white select-none">Установить регион</p>
    </div>
    <div class="btn w-[200px] h-[30px] rounded-full pt-0.5 bg-[dodgerblue] hover:cursor-pointer">
      <p class="text-center text-white select-none">Выбрать местное время</p>
    </div>
  </div>
</template>

<script>
import WorldTime from "@/views/WorldTime";
export default {
  name: "TimeZone",
  data(){
    return {
      continent: 'Asia',
      city: '',
    }
  },
  methods:{
   set_time(){
     WorldTime.methods.set_time(this.continent, this.city)
   }
  }
}
</script>

<style scoped>
  .btn{
    box-shadow: dodgerblue 0 0 6px, dodgerblue 0 0 15px;
  }

  .btn:hover{
    box-shadow: none;
  }

  .btn:active{
    border: 2px solid dodgerblue;
    background: transparent;
  }

  .btn:active p{
    color: dodgerblue;
    margin-bottom: 2px;
  }

  input:hover{
    border: 2px solid lightgray;
  }

  input:focus{
    border: 2px solid dodgerblue;
    color: dodgerblue;
  }

  img{
    display: none;
  }

</style>