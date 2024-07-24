<script setup lang="ts">
// const show = ref<boolean>(false)
// const buttonValue = ref<string>('Смотреть все отзывы')
const yandexImages = ref<{ src: string, href: string }[]>([
  {
    src: 'r1.webp',
    href: 'https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=atv813r5ugafe7k2m5wa0ttu8m&utm_source=review',
  },
  {
    src: 'r2.webp',
    href: 'https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=f1q7ugvu6wmc3n7a0bqcagfjzc&utm_source=review',
  },
  {
    src: 'r3.webp',
    href: 'https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=dtpwk169wfxby966ezgxzbq3t4&utm_source=review',
  },
  {
    src: 'r4.webp',
    href: 'https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=yynz7kqak9ujj2w3x7xfk13jnm&utm_source=review',
  },
  {
    src: 'r5.webp',
    href: 'https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=1zr0pur5up9a6xdbrf8k56uv94&utm_source=review',
  },
  {
    src: 'r6.webp',
    href: 'https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=5273ft370w843ua6m6fnaxakfw&utm_source=review',
  },
])
const instImages = ref<{ src: string }[]>([
  {
    src: 'i1.webp',
  },
  {
    src: 'i2.webp',
  },
  {
    src: '1.webp',
  },
  {
    src: '2.webp',
  },
  {
    src: '3.webp',
  },
  {
    src: '4.webp',
  },
  {
    src: '5.webp',
  },
  {
    src: '6.webp',
  },
  {
    src: '7.webp',
  },
  {
    src: '8.webp',
  },
  {
    src: '9.webp',
  },
  {
    src: '10.webp',
  },
  {
    src: '11.webp',
  },
  {
    src: '12.webp',
  },
  {
    src: '13.webp',
  },
  {
    src: '14.webp',
  },
  {
    src: '15.webp',
  },
])
const mySwiper = ref(null)
const mySwiper2 = ref(null)
const tabs = ref([
  {
    key: 'yandex',
    label: 'Яндекс',
  },
  {
    key: 'inst',
    label: 'Инстаграм',
  }
])
const ui = {
  wrapper: 'tab-full',

  list: {
    base: 'tab-width tab-contacts',
    background: 'bg-yellow tab-border-pink',
    padding: '',

    tab: {
      base: '',
      background: '',
      active: 'tab-purple',
      inactive: 'tab-gray'
    },

    marker: {
      wrapper: 'tab-bg-purple',
    }
  },
}
const tabsRef = ref(0)

const prevSlide = () => tabsRef.value === 0 ? mySwiper.value.slidePrev() : mySwiper2.value.slidePrev()

const nextSlide = () => tabsRef.value === 0 ? mySwiper.value.slideNext() : mySwiper2.value.slideNext()

const onSwiper = (swiper: any) => {
  mySwiper.value = swiper

  console.log(mySwiper.value)
}

const onSwiper2 = (swiper: any) => {
  mySwiper2.value = swiper

  console.log(mySwiper2.value)
}

// const toggle = () => {
//   show.value = !show.value
//
//   show.value
//       ? buttonValue.value = 'Скрыть'
//       : buttonValue.value = 'Смотреть все отзывы'
// }
//
// const setMaxHeight = (el: any) => {
//   el.style.setProperty(
//       '--max-height',
//       el.scrollHeight + 'px'
//   )
// }
</script>

<template>
  <section class="reviews section custom" id="reviews">
    <div class="reviews__top">
      <h2>Отзывы</h2>
      <div class="reviews__top-buttons">
        <button
            class="reviews__top-buttons_item prev"
            @click="prevSlide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button
            class="reviews__top-buttons_item next"
            @click="nextSlide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    <UTabs :items="tabs" :ui="ui" v-model="tabsRef">
      <template #item="{ item }">
        <Swiper
            class="reviews__slider"
            :slides-per-view="1"
            @swiper="onSwiper"
            :space-between="20"
            :modules="[SwiperNavigation, SwiperAutoplay]"
            autoplay
            :loop="true"
            v-if="item.key === 'yandex'"
            :breakpoints="{570: {slidesPerView: 2}, 1000: {slidesPerView: 3}}"
        >
          <SwiperSlide
              v-for="(item, index) in yandexImages"
              :key="index"
          >
            <div class="review">
              <img :src="`/img/reviews/${item.src}`" alt="" loading="lazy">
              <NuxtLink
                  class="review__button button-outline"
                  :to="item.href"
                  target="_blank"
              >
                Читать на Яндексе
              </NuxtLink>
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
            class="reviews__slider"
            :slides-per-view="1"
            @swiper="onSwiper2"
            :space-between="20"
            :modules="[SwiperNavigation, SwiperAutoplay]"
            autoplay
            :loop="true"
            v-if="item.key === 'inst'"
            :breakpoints="{570: {slidesPerView: 2}, 1000: {slidesPerView: 3}}"
        >
          <SwiperSlide
              v-for="(item, index) in instImages"
              :key="index"
          >
            <img :src="`/img/reviews/${item.src}`" alt="" loading="lazy">
          </SwiperSlide>
        </Swiper>
      </template>
    </UTabs>
<!--    <div style="width:762px;height:700px;overflow:hidden;position:relative;"><iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/219417944033?comments"></iframe><a href="https://yandex.ru/maps/org/double_cuts/219417944033/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box">Double Cuts на карте Воронежа — Яндекс Карты</a></div>-->
<!--    <div class="reviews__field">-->
<!--      <div class="review">-->
<!--        <img src="/img/reviews/r1.webp" alt="">-->
<!--        <NuxtLink-->
<!--            class="review__button button-outline"-->
<!--            to="https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=atv813r5ugafe7k2m5wa0ttu8m&utm_source=review"-->
<!--            target="_blank"-->
<!--        >-->
<!--          Читать на Яндексе-->
<!--        </NuxtLink>-->
<!--      </div>-->
<!--      <div class="review">-->
<!--        <img src="/img/reviews/r2.webp" alt="">-->
<!--        <NuxtLink-->
<!--            class="review__button button-outline"-->
<!--            to="https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=f1q7ugvu6wmc3n7a0bqcagfjzc&utm_source=review"-->
<!--            target="_blank"-->
<!--        >-->
<!--          Читать на Яндексе-->
<!--        </NuxtLink>-->
<!--      </div>-->
<!--      <div class="review">-->
<!--        <img src="/img/reviews/r3.webp" alt="">-->
<!--        <NuxtLink-->
<!--            class="review__button button-outline"-->
<!--            to="https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=dtpwk169wfxby966ezgxzbq3t4&utm_source=review"-->
<!--            target="_blank"-->
<!--        >-->
<!--          Читать на Яндексе-->
<!--        </NuxtLink>-->
<!--      </div>-->
<!--    </div>-->
<!--    <transition-->
<!--        name="slide"-->
<!--        @enter="setMaxHeight"-->
<!--    >-->
<!--      <div class="reviews__field" v-if="show">-->
<!--        <div class="review">-->
<!--          <img src="/img/reviews/r4.webp" alt="">-->
<!--          <NuxtLink-->
<!--              class="review__button button-outline"-->
<!--              to="https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=yynz7kqak9ujj2w3x7xfk13jnm&utm_source=review"-->
<!--              target="_blank"-->
<!--          >-->
<!--            Читать на Яндексе-->
<!--          </NuxtLink>-->
<!--        </div>-->
<!--        <div class="review">-->
<!--          <img src="/img/reviews/r5.webp" alt="">-->
<!--          <NuxtLink-->
<!--              class="review__button button-outline"-->
<!--              to="https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=1zr0pur5up9a6xdbrf8k56uv94&utm_source=review"-->
<!--              target="_blank"-->
<!--          >-->
<!--            Читать на Яндексе-->
<!--          </NuxtLink>-->
<!--        </div>-->
<!--        <div class="review">-->
<!--          <img src="/img/reviews/r6.webp" alt="">-->
<!--          <NuxtLink-->
<!--              class="review__button button-outline"-->
<!--              to="https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=5273ft370w843ua6m6fnaxakfw&utm_source=review"-->
<!--              target="_blank"-->
<!--          >-->
<!--            Читать на Яндексе-->
<!--          </NuxtLink>-->
<!--        </div>-->
<!--      </div>-->
<!--    </transition>-->
<!--    <NuxtLink-->
<!--        class="button-toggle"-->
<!--        :to="show ? '#reviews' : ''"-->
<!--        @click="toggle"-->
<!--        :class="{transform: show}"-->
<!--    >-->
<!--      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--        <path d="M6.5 9L12.5 15L18.5 9" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--      </svg>-->
<!--      {{ buttonValue }}-->
<!--    </NuxtLink>-->
  </section>
</template>

<style lang="scss">
@import "../assets/styles/colors";

.reviews{
  margin-bottom: 160px;

  &__top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &-buttons{
      display: flex;
      align-items: stretch;
      gap: 8px;

      &_item{
        border: 1px solid $purple;
        border-radius: 8px;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg path{
          stroke: $purple;
        }

        &:hover{
          svg path{
            stroke: $pink;
          }

          border-color: $pink;
        }
      }
    }
  }

  &__slider {
    width: 100%;
    margin-top: 24px;
    //display: grid;
    //grid-template-columns: 1fr 1fr 1fr;
    //gap: 20px;
    //width: 100%;
    //
    //@media (max-width: 570px) {
    //  grid-template-columns: 1fr;
    //}
    //
    //@media (min-width: 571px) and (max-width: 845px){
    //  grid-template-columns: 1fr 1fr;
    //}

    .review {
      background: white;
      padding: 12px;
      border: 1px solid #2222221A;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      max-width: 400px;
      height: 408px;

      @media (min-width: 651px) and (max-width: 1200px) {
        height: 350px;
      }

      @media (min-width: 571px) and (max-width: 650px) {
        height: 300px;
      }

      @media (max-width: 570px) {
        max-width: unset;
        height: 380px;
      }

      &__button {
        margin-top: auto;
      }
    }
  }
}
</style>