<script setup lang="ts">
const mySwiper = ref(null)
const images = ref<{ src: string }[]>([
  {
    src: 'p1.jpg'
  },
  {
    src: 'p2.jpg'
  },
  {
    src: 'p3.jpg'
  },
  {
    src: 'p4.jpg'
  },
  {
    src: 'p5.jpg'
  },
  {
    src: 'p6.jpg'
  },
  {
    src: 'p7.jpg'
  },
  {
    src: 'p8.jpg'
  },
  {
    src: 'p9.jpg'
  },
  {
    src: 'p10.jpg'
  },
  {
    src: 'p11.jpg'
  },
  {
    src: 'p12.jpg'
  },
  {
    src: 'p13.jpg'
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
      :modules="[SwiperNavigation]"
      :slides-per-view="1"
      :space-between="20"
      @swiper="onSwiper"
      :breakpoints="{570: {slidesPerView: 2}, 1000: {slidesPerView: 3}, 1200: {slidesPerView: 4}, 1400: {slidesPerView: 5}}"
  >
    <SwiperSlide
        v-for="(item, index) in images"
        :key="index"
    >
      <img class="portfolio-swiper__slide" :src="`/img/portfolio/${item.src}`" alt="">
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