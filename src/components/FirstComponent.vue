<template>
  <div id="time" class="h-[50px] w-[500px] bg-gradient-to-r from-red-200 to-green-200 rounded-xl text-center">
    <p class="text-xl text-gray-700 mt-2">{{time}}</p>
  </div>
</template>

<script>
  export default {
    name: 'cardComp',
    data(){
      return{
        'time': '',
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
          let text = new Date(timeTouple.responseText.split(',')[2].slice(12,-1))
          this.time = text
        }, 1000)
      }
    }
  }
</script>
