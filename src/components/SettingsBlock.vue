<template>
  <div class="w-[40px] h-[40px]">
    <img @click="show = ! show" :class="{spin: !show, spin_reverse: show}" id="img_settings" src="@/assets/icons/img_settings.png" alt="settings" title="settings">
    <transition name="settings_block">
      <div v-if="show" :style="{backgroundColor: $store.state.BG_COLOR}" class="w-[120px] h-[75px] rounded-[10px] flex justify-around" id="settings_block">
        <div @click="changeMode" class="bg-transparent border-2 border-[dodgerblue] w-[60px] h-[22px] rounded-[12px] mt-10">
          <div :class="{lightMode: !dark, darkMode: dark}" class="rounded-full bg-[dodgerblue] w-[19px] h-[19px]"></div>
          <p v-if="dark" :style="{color: $store.state.TEXT_COLOR}" class="text-[12px] relative left-[22px] bottom-[18px]">dark</p>
          <p v-else :style="{color: $store.state.TEXT_COLOR}" class="text-[12px] relative left-[8px] bottom-[18px]">light</p>
        </div>
        <div class="bg-[dodgerblue] w-[20px] h-[20px] rounded-[10px] mt-10">

        </div>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  name: "SettingsBlock",
  data(){
    return {
      show: false,
      dark: true,
    }
  },
  methods: {
    changeMode(){
      this.dark = ! this.dark
      if(this.dark){
        localStorage.mode = 'dark'
      }else{
        localStorage.mode = 'light'
      }
      this.$store.commit('setMode')
    }
  }
}
</script>

<style scoped>
  #settings_block{
    background-color: rgba(60,62,65);
    box-shadow: rgba(255,255,255,.05) -5px -5px 12px, rgba(0,0,0,.2) 5px 5px 20px;
    position: absolute;
    top: 10px;
    left: 10px;
    overflow: hidden;
  }

  #img_settings{
    position: relative;
    z-index: 100;
  }

  #img_settings:hover{
    cursor: pointer;
  }

  .spin{
    animation: spin 0.5s;
  }

  .spin_reverse{
    animation: spin_reverse 0.5s;
  }

  .settings_block-enter-active{
    animation: appear 0.2s;
  }

  .settings_block-leave-active{
    animation: appear 0.2s reverse;
  }

  @keyframes spin {
    from{
      transform: rotate(0deg)
    }
    to{
      transform: rotate(360deg);
    }
  }

  @keyframes spin_reverse {
    from{
      transform: rotate(0deg)
    }
    to{
      transform: rotate(-360deg);
    }
  }

  @keyframes appear {
    from {
      width: 0;
      height: 0;
    }
    to{
      width: 120px;
      height: 70px;
    }

  }

  .lightMode{
    transform: translateX(40px);
    transition-duration: 0.2s;
  }

  .darkMode{
    transform: translateX(-1px);
    transition-duration: 0.2s;
  }

</style>