<template lang="pug">
.left-drawer
  q-drawer.q-mt-sm(
    v-model='mainDrawer'
    show-if-above
    @mouseover='miniState = false'
    @mouseout='miniState = true'
    :width="218"
    )
    router-link.text-decoration-none(:to="{ name: 'home' }")
      q-item(clickable v-ripple)
        q-item-section(avatar)
          q-avatar(square size='24px')
            img(src='public/icons/home.png')
        q-item-section
          .text-weight-bold.drawer-text Главная
    q-expansion-item.text-white.q-py-sm(
      :expanded.sync="modelsExpanded"
      dense
      :expand-icon="modelsExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
      )
      template(v-slot:header)
        q-item-section(avatar)
          q-icon(color='grey-7' name="perm_identity")
        q-item-section
          .text-weight-bold.drawer-text Модели
      router-link.text-decoration-none(:to="{ name: 'player-models'}")
        q-item(clickable v-ripple align="center")
          q-item-section(avatar)
            q-avatar(square size='24px')
              img(src='public/icons/pose.png')
          q-item-section
            .text-weight-bold.drawer-text Модели игроков
      router-link.text-decoration-none(:to="{ name: 'weapon-models'}")
        q-item(clickable v-ripple align="center")
          q-item-section(avatar)
            q-avatar(square size='26px')
              img(src='public/icons/gun.png')
          q-item-section
            .text-weight-bold.drawer-text Модели оружия
    router-link.text-decoration-none(:to="{ name: 'faq'}")
      q-item(clickable v-ripple)
        q-item-section(avatar)
          q-avatar(square size='24px')
            img(src='public/icons/exclamation-point.png')
        q-item-section
          .text-weight-bold.drawer-text О игре
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
    background-color: rgba(66, 63, 63, 0.9);
  }
  .q-item-section.avatar {
    padding: 0;
    margin: 0;
  }
  .q-item--active {
    text-decoration: none;
  }
}

</style>
