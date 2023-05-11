<template>
  <div class="w-[40px] h-[40px] z-50">
    <img @click="show = ! show" :class="{spin: !show, spin_reverse: show}" id="img_settings" src="@/assets/icons/img_settings.png" alt="settings" title="Настройки">
    <transition name="settings_block">
      <div v-if="show" :style="[{backgroundColor: $store.state.BG_COLOR}, $store.state.SMALL_SHADOWS]" class="w-[120px] h-[75px] rounded-[10px] flex justify-around" id="settings_block">
        <div @click="changeMode" class="bg-transparent border-[2px] border-[dodgerblue] w-[75px] h-[22px] rounded-[12px] mt-10 cursor-pointer">
          <div :class="{lightMode: !dark, darkMode: dark}" class="rounded-full bg-[dodgerblue] w-[19px] h-[19px]"></div>
          <p v-if="dark" :style="{color: $store.state.TEXT_COLOR}" class="text-[12px] relative left-[22px] bottom-[18px]">темная</p>
          <p v-else :style="{color: $store.state.TEXT_COLOR}" class="text-[12px] relative left-[8px] bottom-[18px]">светлая</p>
        </div>
        <img @click="changeSound" v-if="sound" title="Выключить звук" src="@/assets/icons/img_sound.png" alt="sound" class="w-[26px] h-[26px] mt-[37px] cursor-pointer">
        <img @click="changeSound" v-else title="Включить звук" src="@/assets/icons/img_no_sound.png" alt="sound" class="w-[26px] h-[26px] mt-[37px] filter hue-rotate-[160deg] cursor-pointer">
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
      sound: true,
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
    },

    changeSound(){
      this.sound = ! this.sound
      if(this.sound){
        localStorage.sound = 'sound'
      }else{
        localStorage.sound = 'noSound'
        document.getElementsByName('audio').forEach((el)=>{
          el.pause()
        })
      }
    }
  },
  mounted() {
    this.dark = localStorage.mode === 'dark'
    this.sound = localStorage.sound === 'sound'
    this.$store.commit("setMode")
  }
}
</script>

<style scoped>
  #settings_block{
    background-color: rgba(60,62,65);
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
    transform: translateY(-1px) translateX(55px);
    transition-duration: 0.2s;
  }

  .darkMode{
    transform: translateY(-1px) translateX(-1px);
    transition-duration: 0.2s;
  }

</style>