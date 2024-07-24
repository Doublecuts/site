<script setup lang="ts">
const mySwiper = ref(null)
const images = ref<{ src: string }[]>([
  {
    src: 'p1.webp'
  },
  {
    src: 'p2.webp'
  },
  {
    src: 'p3.webp'
  },
  {
    src: 'p4.webp'
  },
  {
    src: 'p5.webp'
  },
  {
    src: 'p6.webp'
  },
  {
    src: 'p7.webp'
  },
  {
    src: 'p8.webp'
  },
  {
    src: 'p9.webp'
  },
  {
    src: 'p10.webp'
  },
  {
    src: 'p11.webp'
  },
  {
    src: 'p12.webp'
  },
  {
    src: 'p13.webp'
  },
])

const prevSlide = () => {
  mySwiper.value.slidePrev()
}

const nextSlide = () => {
  mySwiper.value.slideNext()
}

const onSwiper = (swiper: any) => {
  mySwiper.value = swiper

  console.log(mySwiper.value)
}

defineExpose({
  prevSlide, nextSlide
})
</script>

<template>
  <Swiper
      class="portfolio-swiper"
      :modules="[SwiperNavigation, SwiperAutoplay]"
      :slides-per-view="1"
      :space-between="20"
      @swiper="onSwiper"
      :breakpoints="{570: {slidesPerView: 2}, 1000: {slidesPerView: 3}, 1200: {slidesPerView: 4}, 1400: {slidesPerView: 5}}"
      autoplay
      :loop="true"
  >
    <SwiperSlide
        v-for="(item, index) in images"
        :key="index"
    >
      <img class="portfolio-swiper__slide" :src="`/img/portfolio/${item.src}`" alt="" loading="lazy">
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss">
.portfolio-swiper{
  margin-top: 24px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }

  &__slide{
    width: 100% !important;
    height: 400px;
    object-fit: cover;
    border-radius: 12px;
  }
}
</style>