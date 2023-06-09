<template lang="pug">
q-header(elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'")
  q-toolbar
    q-toolbar-title.q-ml-xl CS-NET
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
