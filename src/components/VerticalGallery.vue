<template lang="pug">
.q-pa-md
  q-carousel.gallery-carousel.cursor-pointer(
    swipeable
    animated
    v-model="slide"
    thumbnails
    infinite
  )
    q-carousel-slide(@click="OpenFullScreenImage(1)" :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg")
    q-carousel-slide(@click="OpenFullScreenImage(2)" :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg")
    q-carousel-slide(@click="OpenFullScreenImage(3)" :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg")
    q-carousel-slide(@click="OpenFullScreenImage(4)" :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg")
</template>
<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()
    const slide = ref(1)
    const dialog = ref(false)

    const OpenFullScreenImage = (slideIndex) => {
      $q.dialog({
        message: `<img src="https://cdn.quasar.dev/img/mountains.jpg" style="max-width: 100%">`,
        html: true,
      }).onDismiss(() => {
        dialog.value = false
      })
    }

    return {
      OpenFullScreenImage,
      dialog,
      slide
    }
  }
}
</script>
<style lang="scss">
.gallery-carousel {
  width: 520px;
  height: 320px;
}
</style>
