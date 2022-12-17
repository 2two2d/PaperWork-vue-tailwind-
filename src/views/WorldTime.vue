<template>
  <div class="flex flex-col items-center justify-between h-[550px] mt-[40px]">
    <time-zone></time-zone>
    <watch-clock v-bind:milliseconds="milliseconds" v-bind:seconds="seconds" v-bind:minutes="minutes" v-bind:hours="hours"></watch-clock>
    <data-block v-bind:response_text="time_text"></data-block>
  </div>
</template>

<script>
  import WatchClock from "@/components/WatchClock";
  import DataBlock from "@/components/DataBlock";
  import TimeZone from "@/components/TimeZone";

  export default {
    name: 'WorldTime',
    data(){
      return{
        time_zone: Date(),
        milliseconds: '00',
        seconds: '00',
        minutes: '00',
        hours: '00',
      }
    },
    components: {
      WatchClock, DataBlock, TimeZone,
    },
    mounted() {
      this.set_time()
    },
    methods: {
       set_time(region){
         if (region){
           let request = new XMLHttpRequest();
           request.open('GET', 'http://worldtimeapi.org/api/timezone/Europe/London', false)
           request.send()
           console.log(request.responseText)
           let time = new Date(request.responseText.split(',')[2].slice(12,-1))
           this.show_time(time)
         }else{
           let time = new Date()
           this.show_time(time)
         }
       },
       show_time(time){
         setInterval(()=>{
           time.setMilliseconds(time.getMilliseconds()+200)
           this.milliseconds = time.getMilliseconds()
           String(time.getSeconds()).length == 1 ? this.seconds = '0' + time.getSeconds() : this.seconds = time.getSeconds()
           String(time.getMinutes()).length == 1 ? this.minutes = '0' + time.getMinutes() : this.minutes = time.getMinutes()
           String(time.getHours()).length == 1 ? this.hours = '0' + time.getHours() : this.hours = time.getHours()
           this.time_text = time
         }, 200)
       },
    },
  }
</script>
