<template>
  <watch-clock v-bind:seconds="seconds"></watch-clock>
</template>

<script>
  import WatchClock from "@/components/WatchClock";

  export default {
    name: 'WorldTime',
    data(){
      return{
        time_text: '',
        seconds: '',

      }
    },
    components: {
      WatchClock,
    },
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
           this.seconds = time.getSeconds()
           this.time_text = time
         }, 1000)
       },
    },
  }
</script>
