<template>
  <div class="flex flex-col items-center justify-around mt-[20px]">
    <div class="w-[700px] h-[120px] flex flex-wrap justify-between">
      <div class="w-[700px] flex justify-between mt-[20px]">
        <div>
          <input type="radio" id="Asia" name="radio" class="peer hidden" value="Asia" checked v-model="continent">
          <label @click="set_continent_in_storage('Asia'); get_cities('Asia')" for="Asia" class="text-gray-500 hover:text-white peer-checked:text-[dodgerblue] peer-checked:text-xl peer-checked:block peer-checked:mt-[-5px] hover:cursor-pointer transition">Азия</label>
        </div>
        <div>
          <input type="radio" id="Europe" name="radio" class="peer hidden" value="Europe" v-model="continent">
          <label @click="set_continent_in_storage('Europe'); get_cities('Europe')" for="Europe" class="text-gray-500 hover:text-white peer-checked:text-[dodgerblue] peer-checked:text-xl peer-checked:block peer-checked:mt-[-5px] hover:cursor-pointer transition">Европа</label>
        </div>
        <div>
          <input type="radio" id="America" name="radio" class="peer hidden" value="America" v-model="continent">
          <label @click="set_continent_in_storage('America'); get_cities('America')" for="America" class="text-gray-500 hover:text-white peer-checked:text-[dodgerblue] peer-checked:text-xl peer-checked:block peer-checked:mt-[-5px] hover:cursor-pointer transition">Америка</label>
        </div>
        <div>
          <input type="radio" id="Australia" name="radio" class="peer hidden" value="Australia" v-model="continent">
          <label @click="set_continent_in_storage('Australia'); get_cities('Australia')" for="Australia" class="text-gray-500 hover:text-white peer-checked:text-[dodgerblue] peer-checked:text-xl peer-checked:block peer-checked:mt-[-5px] hover:cursor-pointer transition">Австралия</label>
        </div>
        <div>
          <input type="radio" id="Africa" name="radio" class="peer hidden" value="Africa" v-model="continent">
          <label @click="set_continent_in_storage('Africa'); get_cities('Africa')" for="Africa" class="text-gray-500 hover:text-white peer-checked:text-[dodgerblue] peer-checked:text-xl peer-checked:block peer-checked:mt-[-5px] hover:cursor-pointer transition">Африка</label>
        </div>
      </div>
      <div class="w-[200px]">
        <img src="@/assets/icons/img_search.png" alt="img" width="22" height="22" class="absolute ml-[170px] mt-[3px] invert-[0.8] hover:cursor-pointer" id="search_img">
        <input v-model="city" v-on:keydown.enter="set_time" type="text" :style="{backgroundColor: $store.state.BG_COLOR}" autocomplete="off" class="w-[200px] h-[30px] rounded-full border-2 border-gray-400 outline-0 text-[dodgerblue] text-center focus:placeholder-[dodgerblue]" id="search_input" placeholder="Город">
        <div v-if="properCities && city" class="absolute mt-[10px] flex flex-wrap w-[200px] max-h-[80px] overflow-y-scroll overflow-x-hidden bg-[dodgerblue] rounded-l p-[5px]">
          <div v-for="city in properCities" :key="city" @click="this.city=city; set_time()" class="w-[200px] h-[12px] flex justify-between mb-[8px] cursor-pointer">
            <p class="text-[white]">{{city}}</p>
            <p class="text-[white]">{{this.continent}}</p>
          </div>
        </div>
      </div>
      <div @click="set_time" :style="$store.state.SMALL_SHADOWS" class="btn w-[200px] h-[30px] rounded-full pt-0.5 bg-[dodgerblue] hover:cursor-pointer">
        <p class="text-center text-white select-none">Установить регион</p>
      </div>
      <div @click="set_default" :style="$store.state.SMALL_SHADOWS" class="btn w-[200px] h-[30px] rounded-full pt-0.5 bg-[dodgerblue] hover:cursor-pointer">
        <p class="text-center text-white select-none">Системное время</p>
      </div>
    </div>
    <div class="flex h-[400px] w-[700px] justify-between">
      <data-block v-bind:response_text="response_data" v-bind:validation_error="validation_error"></data-block>
      <watch-clock v-bind:milliseconds="milliseconds" v-bind:seconds="seconds" v-bind:minutes="minutes" v-bind:hours="hours"></watch-clock>
    </div>
    <div class="w-[700px] mt-[50px] mb-[200px]">
      <p :style="{color: $store.state.TEXT_COLOR}" class="text-[22px]">Города выбранного континента</p>
      <div class="w-[700px] flex flex-wrap justify-between mt-[20px]">
        <p v-for="city in $store.state.CITIES_SET" :key="city" @click="this.city=city; set_time()" class="text-[dodgerblue] m-[6px] mr-[10px] ml-[10px] cursor-pointer">{{city}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import WatchClock from "@/components/WatchClock";
  import DataBlock from "@/components/DataBlock";

  export default {
    name: 'WorldTime',
    data(){
      return{
        validation_error: '',
        time_zone: Date(),
        milliseconds: '00',
        seconds: '00',
        minutes: '00',
        hours: '00',
        continent: 'Asia',
        city: localStorage.city,
        response_data: '',
        interval: '',
      }
    },
    components: {
      WatchClock, DataBlock
    },
    mounted() {
      this.set_default()
      this.get_cities(this.continent)
    },
    methods: {
      set_continent_in_storage(continent){
        localStorage.continent = continent
      },
      set_time(){
          if(this.city_validator(this.city)) {
            this.$store.dispatch('GET_TIME', [this.continent, this.city])
            let response = this.$store.state.RESPONSE
            console.log(response)
            if (response.status ===  200) {
              let time = new Date(response.data.datetime.slice(0, 19))
              this.response_data = response.data
              this.validation_error = ''
              this.show_time(time)
            } else {
              this.validation_error = 'Такой город не найден!'
              this.response_data = ''
              let time = new Date()
              this.show_time(time)
            }
          }
        },
      set_default(){
        document.getElementById(localStorage.continent).click()
        let time = new Date()
        clearInterval(this.interval)
        this.response_data = ''
        this.validation_error = 'Регион не выбран!'
        this.show_time(time)
      },
      show_time(time){
        clearInterval(this.interval)
        this.interval = setInterval(()=>{
           time.setMilliseconds(time.getMilliseconds()+10)
           this.milliseconds = time.getMilliseconds()
           String(time.getSeconds()).length === 1 ? this.seconds = '0' + time.getSeconds() : this.seconds = time.getSeconds()
           String(time.getMinutes()).length === 1 ? this.minutes = '0' + time.getMinutes() : this.minutes = time.getMinutes()
           String(time.getHours()).length === 1 ? this.hours = '0' + time.getHours() : this.hours = time.getHours()
           this.time_text = time
        }, 10)
      },
      city_validator(city){
         if(city.lastIndexOf(' ') !== -1){
           this.validation_error = 'Для названий городов, состоящих из двух слов, используйте символ "_"'
           return false
         }else if(city[0] !== city[0].toUpperCase()){
           this.validation_error = 'Название города должно начинаться с большой буквы!'
           return false
         }else if(/[0-9]/.test(city)){
           this.validation_error = 'Название города не может содержать цифры!'
           return false
         }else{
           return true
         }
      },
      get_cities(zone){
        this.city = ''
        this.$store.dispatch('GET_CITIES', zone)
      }
    },
    computed: {
      properCities(){
        if(this.$store.state.CITIES_SET && !this.$store.state.CITIES_SET.includes(this.city) && this.city){
          return this.$store.state.CITIES_SET.filter((city)=>{
            return city.toLowerCase().startsWith(this.city.toLowerCase())
          })
        }
        return false
      },
    },
    beforeUnmount(){
      localStorage.continent = this.continent
      localStorage.city = this.city
    }
  }
</script>

<style scoped>
  .btn{
    background: linear-gradient(145deg, #209fff, #1b82e6);
  }
  .btn:hover{
    background: linear-gradient(145deg, #1b82e6, #209aff);
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
