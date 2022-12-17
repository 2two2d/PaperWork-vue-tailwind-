<template>
  <div class="w-[500px] h-[30px] flex items-center justify-between">
    <div>
      <img src="@/assets/icons/img_search.png" alt="img" width="22" height="22" class="absolute ml-[210px] mt-[3px] invert-[0.8] hover:cursor-pointer">
      <input type="text" class="w-[240px] h-[30px] rounded-full border-2 border-gray-300 bg-[rgba(60,62,65)] outline-0 text-white pl-2" placeholder="Город">
    </div>
    <div class="btn w-[240px] h-[30px] rounded-full pt-0.5 bg-[dodgerblue] hover:cursor-pointer">
      <p class="text-center text-white">Уставновить местное время</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeZone"
}
</script>

<style scoped>
  .blck{
    box-shadow: rgba(255,255,255,.05) -5px -5px 12px, rgba(0,0,0,.2) 5px 5px 12px;
  }
  .btn{
    box-shadow: dodgerblue 0 0 6px, dodgerblue 0 0 15px;
  }
</style>