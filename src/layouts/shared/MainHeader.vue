<template lang="pug">
q-header(elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'")
  q-toolbar
    .q-ml-lg
    img.main-logo(src='public/icons/logo.png')
    q-toolbar-title.q-ml-sn CS-NET
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const drawer = ref(false)

    return {
      drawer,
    }
  }
}
</script>

<style lang="scss">
.main-logo {
  width: 70px;
  height: 45px;
}
</style>
