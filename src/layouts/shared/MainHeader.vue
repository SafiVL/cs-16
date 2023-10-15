<template lang="pug">
q-header.bg-grey-9.header
  q-toolbar
    .q-ml-lg
    img.main-logo(src='public/icons/logo.png')
    q-toolbar-title.text-yellow-6.text-weight-bolder.qwer CS-NET.RU
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
.header {
  background-color: rgba(66, 63, 63, 0.84);
  .qwer {
    text-shadow: 0 0 10px #00adff, 0 0 10px #00b7ff, 0 0 5px #00aeff, 0 0 8px #00c4ff;
  }
  .main-logo {
    width: 90px;
    height: 63px;
  }
}
</style>
