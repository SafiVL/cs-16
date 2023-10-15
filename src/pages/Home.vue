<template lang="pug">
.home
  q-card.main-card.q-pa-md.q-mt-xl.q-mx-xl(flat bordered)
    .row
      .col
        q-card-section.row.justify-between
          h5.test.text-bold.q-my-none Скачать КС 1.6 Русская версия (Counter-Strike 1.6)
        q-card-section.main-text.text-grey-4
          p.text-subtitle2.
            Counter-Strike 1.6, она же CS 1.6 - многопользовательская компьютерная игра в жанре популярного и легендарного шутера от первого лица,
            основная концепция которой заключается в противостоянии команд спецназа и террористов на различной местности и по разным сценариям.
            Для онлайн игры по интренету в поиске доступны сервера с различными модами.
            Также есть режим игры с Ботами на любых картах.
          p.text-subtitle2.
            В Контру можно играть даже на слабом компьютере.
            Главное загрузить клиент игры и погрузиться в увлекательный и захватывающий мир баталий
          .text-h6.text-grey-4.text-bold Скачать КС 1.6 — проще простого!
          p.text-subtitle2.
            Скачать и установить бесплатно чистую стандартную сборку Контр-Страйк 1.6 с защитой, на основе оригинальной Steam версии, можно по прямой ссылке ниже.
        q-card-actions.q-ml-md
          q-btn.main-btn.text-grey-9.text-weight-bold(
            no-caps
            color="yellow-13"
            @click="download"
          )
            span.download.text-grey-14 Скачать игру
      .col
        .carousel-wrapper
          q-carousel.centered-carousel.shadow-7(
              animated
              v-model="slide"
              navigation
              infinite
              :autoplay="true"
              transition-prev="slide-right"
              transition-next="slide-left"
              @mouseenter="autoplay = false"
              @mouseleave="autoplay = true"
            )
              q-carousel-slide( :name="1" img-src="~/assets/images/img1.jpg")
              q-carousel-slide( :name="2" img-src="~/assets/images/img2.png")
              q-carousel-slide( :name="3" img-src="~/assets/images/img3.png")
              q-carousel-slide( :name="4" img-src="~/assets/images/img4.png")
              q-carousel-slide( :name="5" img-src="~/assets/images/img5.png")
              q-carousel-slide( :name="6" img-src="~/assets/images/img6.png")
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const slide = ref(1)
    const download = () => {
    }
    return {
      slide
    }
  }
})
</script>

<style lang="scss">
.home {
  .download {
    font-size: 16px;
    letter-spacing: 1px;
  }
  .main-btn:hover {
    box-shadow: 0px 0px 20px 4px rgba(255, 242, 0, 0.47);
  }
  .q-carousel {
    height: 62%;
    width: 605px;
  }
  .carousel-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .centered-carousel {
    width: 80%;
    height: 80%;
    max-width: 100%;
    max-height: 100%;
  }
}

</style>
