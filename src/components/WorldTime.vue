<template>
  <div id="time" class="h-[50px] w-[500px] bg-gradient-to-r from-red-200 to-green-200 rounded-xl text-center">
    <p class="text-xl text-gray-700 mt-2">{{time_text}}</p>
  </div>
</template>

<script>
  export default {
    name: 'cardComp',
    data(){
      return{
        time_text: '',
        timestamp: '',

      }
    },
    components: {},
    mounted() {
      this.get_time()
    },
    methods: {
      get_time(){

        setInterval(()=>{
          let timeTouple = new XMLHttpRequest();
          timeTouple.open('GET', 'http://worldtimeapi.org/api/timezone/Europe/London', false)
          timeTouple.send()
          let time = new Date(timeTouple.responseText.split(',')[2].slice(12,-1))
          time.setSeconds(time.getSeconds()+1)
          this.time_text = time
        }, 1000)
      },
    },
  }
</script>
