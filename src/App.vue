<template>
  <div id="main" class="flex flex-col items-center w-full mt-6">
    <card/>
  </div>
</template>

<script>
  import '@/assets/css/tailwind.css'
  import cardComp from '@/components/FirstComponent'
  export default {
    components: {
      'card': cardComp,
    }
  }
</script>
