<template lang="pug">
q-layout.shadow-2.rounded-borders(view='hHh Lpr lff')
  main-header
  left-drawer
  q-page-container
    router-view
</template>

<script>
import LeftDrawer from 'components/LeftDrawer.vue'
import MainHeader from 'layouts/shared/MainHeader.vue'

export default {
  components: { LeftDrawer, MainHeader },
  setup () {
    return {
    }
  }
}
</script>

<style></style>
