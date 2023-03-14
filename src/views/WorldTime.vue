<template>
  <div class="flex flex-col items-center justify-around h-[600px] mt-[20px]">
    <div class="w-[700px] h-[120px] flex flex-wrap justify-between">
      <div class="w-[700px] flex justify-between">
        <div>
          <input type="radio" id="radio_asia" name="radio" class="peer hidden" value="Asia" checked v-model="continent">
          <label for="radio_asia" class="text-gray-400 hover:text-white peer-checked:text-[dodgerblue] peer-checked:text-xl peer-checked:block peer-checked:mt-[-5px] hover:cursor-pointer transition">Азия</label>
        </div>
        <div>
          <input type="radio" id="radio_europe" name="radio" class="peer hidden" value="Europe" v-model="continent">
          <label for="radio_europe" class="text-gray-400 hover:text-white peer-checked:text-[dodgerblue] peer-checked:text-xl peer-checked:block peer-checked:mt-[-5px] hover:cursor-pointer transition">Европа</label>
        </div>
        <div>
          <input type="radio" id="radio_south_america" name="radio" class="peer hidden" value="South_America" v-model="continent">
          <label for="radio_south_america" class="text-gray-400 hover:text-white peer-checked:text-[dodgerblue] peer-checked:text-xl peer-checked:block peer-checked:mt-[-5px] hover:cursor-pointer transition">Южная Америка</label>
        </div>
        <div>
          <input type="radio" id="radio_north_america" name="radio" class="peer hidden" value="North_America" v-model="continent">
          <label for="radio_north_america" class="text-gray-400 hover:text-white peer-checked:text-[dodgerblue] peer-checked:text-xl peer-checked:block peer-checked:mt-[-5px] hover:cursor-pointer transition">Северная Америка</label>
        </div>
        <div>
          <input type="radio" id="radio_australia" name="radio" class="peer hidden" value="Australia" v-model="continent">
          <label for="radio_australia" class="text-gray-400 hover:text-white peer-checked:text-[dodgerblue] peer-checked:text-xl peer-checked:block peer-checked:mt-[-5px] hover:cursor-pointer transition">Австралия</label>
        </div>
        <div>
          <input type="radio" id="radio_africa" name="radio" class="peer hidden" value="Africa" v-model="continent">
          <label for="radio_africa" class="text-gray-400 hover:text-white peer-checked:text-[dodgerblue] peer-checked:text-xl peer-checked:block peer-checked:mt-[-5px] hover:cursor-pointer transition">Африка</label>
        </div>
      </div>
      <div class="w-[200px]">
        <img src="@/assets/icons/img_search.png" alt="img" width="22" height="22" class="absolute ml-[170px] mt-[3px] invert-[0.8] hover:cursor-pointer" id="search_img">
        <input v-model="city" v-on:keydown.enter="set_time" type="text" class="w-[200px] h-[30px] rounded-full border-2 border-gray-400 bg-[rgba(60,62,65)] outline-0 text-white text-center focus:placeholder-[dodgerblue]" id="search_input" placeholder="Город">
      </div>
      <div v-on:click="set_time(this.continent, this.city)" class="btn w-[200px] h-[30px] rounded-full pt-0.5 bg-[dodgerblue] hover:cursor-pointer">
        <p class="text-center text-white select-none">Установить регион</p>
      </div>
      <div class="btn w-[200px] h-[30px] rounded-full pt-0.5 bg-[dodgerblue] hover:cursor-pointer">
        <p class="text-center text-white select-none">Выбрать местное время</p>
      </div>
    </div>
    <div class="flex h-[400px] w-[700px] justify-between">
      <data-block v-bind:response_text="response_data"></data-block>
      <watch-clock v-bind:milliseconds="milliseconds" v-bind:seconds="seconds" v-bind:minutes="minutes" v-bind:hours="hours"></watch-clock>
    </div>
  </div>
</template>

<script>
  import WatchClock from "@/components/WatchClock";
  import DataBlock from "@/components/DataBlock";
  let interval;

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
        city: 'Tomsk',
        response_data: '',
      }
    },
    components: {
      WatchClock, DataBlock
    },
    mounted() {
      this.set_time()
    },
    methods: {
       set_time(continent, city){
         if (continent && city){
           if(this.city_validator(city)) {
             let request = new XMLHttpRequest()
             request.open('GET', `http://worldtimeapi.org/api/timezone/${continent}/${city}`, false)

             request.send()
             if (request.status == '200') {
               let time = new Date(request.responseText.split(',')[2].slice(12, 16),
                   request.responseText.split(',')[2].slice(17, 19),
                   request.responseText.split(',')[2].slice(20, 22),
                   request.responseText.split(',')[2].slice(23, 25),
                   request.responseText.split(',')[2].slice(26, 28),
                   request.responseText.split(',')[2].slice(29, 31))
               this.response_data = request.responseText
               console.log(request.responseText)
               request.abort()
               this.show_time(time)
             } else {
               let time = new Date()
               this.show_time(time)
             }
           }
         }else{
           let time = new Date()
           this.show_time(time)
         }
       },
       show_time(time){
         clearInterval(interval)
         interval = setInterval(()=>{
           time.setMilliseconds(time.getMilliseconds()+200)
           this.milliseconds = time.getMilliseconds()
           String(time.getSeconds()).length == 1 ? this.seconds = '0' + time.getSeconds() : this.seconds = time.getSeconds()
           String(time.getMinutes()).length == 1 ? this.minutes = '0' + time.getMinutes() : this.minutes = time.getMinutes()
           String(time.getHours()).length == 1 ? this.hours = '0' + time.getHours() : this.hours = time.getHours()
           this.time_text = time
         }, 200)
       },
      city_validator(city){
         if(city.lastIndexOf(' ') !== -1){

           this.validation_error = 'Для названий городов, состоящих из двух слов, используйте символ "_"'
           return false
         }else if(city[0] !== city[0].toUpperCase()){

           this.validation_error = 'Название города должно начинаться с большой буквы!'
           return false
         }else{
           return true
         }
      }
    },
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
