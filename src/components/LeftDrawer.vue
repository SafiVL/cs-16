<template lang="pug">
.left-drawer
  q-drawer.bg-blured(v-model='mainDrawer' show-if-above :mini='miniState' @mouseover='miniState = false' @mouseout='miniState = true' :width="200" bordered)
    router-link(:to="{ name: 'home' }")
      q-item(clickable v-ripple)
        q-item-section(avatar)
          q-icon(name='home' color='white')
        q-item-section
          .text-white Главная
    router-link(:to="{ name: 'mod-builds'}")
      q-item(clickable v-ripple)
        q-item-section(avatar)
          q-icon(name='file_download' color='white')
        q-item-section
          .text-white Сборки
    q-expansion-item.text-white(
      :expanded.sync="modelsExpanded"
      dense
      icon="person_4"
      icon-color="white"
      label="Модели"
      :expand-icon="modelsExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
      )
      q-item(clickable v-ripple align="center")
        q-item-section
          span.text-white Модели игроков
      q-item(clickable v-ripple align="center")
        q-item-section
          span.text-white Модели оружия
    q-item(clickable v-ripple)
      q-item-section(avatar)
        q-icon(name='star' color='white')
      q-item-section
        .text-white О игре
        //q-item(clickable v-ripple)
        //  q-item-section(avatar)
        //    q-icon(name='send')
        //  q-item-section
        //    | Модели игроков
</template>

<script>
import { ref } from 'vue'

export default ({
  setup() {
    const mainDrawer = ref(false)
    const miniState = ref(true)
    const modelsExpanded = ref(false)
    return {
      mainDrawer,
      miniState,
      modelsExpanded
    }
  }
})
</script>

<style lang="scss">
.left-drawer {
  .q-drawer {
    background-color: rgba(66, 63, 63, 0.79);
  }
}

</style>
