<template lang="pug">
q-card.main-card.q-pa-md.q-mx-xl.q-mt-xl.text-grey-4(flat bordered)
  q-card-section.row.justify-between
    | Название
  q-card-actions(vertical)
    .row
      .col
        vertical-gallery
      .col
        | Lorem ipsum dolor sit amet consectetur adipisicing elit.
        q-btn.main-btn.text-bold.text-grey-9.flex.q-mt-xl(
          class="glossy"
          color="grey-4"
          label="Скачать"
        )
</template>

<script>
import VerticalGallery from 'components/VerticalGallery.vue'

export default {
  components: { VerticalGallery },
  setup() {
    return {
    }
  }
}
</script>
