<template lang="pug">
.mob-builds.text-grey-4.q-pa-md.row.items-start.q-gutter-md
  q-card.q-mt-xl.q-mx-xl(flat bordered)
    img( src="https://cdn.quasar.dev/img/mountains.jpg")
    q-card-section.row.justify-between
      .text-h6 Name
      .text-subtitle1 lorem ipsum dolor sit amet
    q-card-actions(vertical)
      q-btn.main-btn.text-bold.text-grey-9(
        no-caps
        class="glossy"
        color="grey-4"
        label="Подробно"
      )
</template>

<script>
export default {
  setup() {
  }
}
</script>

<style lang="scss">
.mob-builds {
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 50px;
  .q-card {
    background: radial-gradient(circle, rgba(86, 88, 89, 0.96) 0%, rgba(44, 44, 44, 0.96) 100%);
    width: 100%;
    max-width: 250px;
  }
  // по 4 колонки сделать карточки в будущем
}
</style>
