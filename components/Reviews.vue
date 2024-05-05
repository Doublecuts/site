<script setup lang="ts">
const show = ref<boolean>(false)
const buttonValue = ref<string>('Смотреть все отзывы')

const toggle = () => {
  show.value = !show.value

  show.value
      ? buttonValue.value = 'Скрыть'
      : buttonValue.value = 'Смотреть все отзывы'
}

const setMaxHeight = (el: any) => {
  el.style.setProperty(
      '--max-height',
      el.scrollHeight + 'px'
  )
}
</script>

<template>
  <section class="reviews section custom" id="reviews">
    <h2>Отзывы</h2>
<!--    <div style="width:762px;height:700px;overflow:hidden;position:relative;"><iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/219417944033?comments"></iframe><a href="https://yandex.ru/maps/org/double_cuts/219417944033/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box">Double Cuts на карте Воронежа — Яндекс Карты</a></div>-->
    <div class="reviews__field">
      <div class="review">
        <img src="/img/reviews/r1.png" alt="">
        <NuxtLink
            class="review__button button-outline"
            to="https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=atv813r5ugafe7k2m5wa0ttu8m&utm_source=review"
            target="_blank"
        >
          Читать на Яндексе
        </NuxtLink>
      </div>
      <div class="review">
        <img src="/img/reviews/r2.png" alt="">
        <NuxtLink
            class="review__button button-outline"
            to="https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=f1q7ugvu6wmc3n7a0bqcagfjzc&utm_source=review"
            target="_blank"
        >
          Читать на Яндексе
        </NuxtLink>
      </div>
      <div class="review">
        <img src="/img/reviews/r3.png" alt="">
        <NuxtLink
            class="review__button button-outline"
            to="https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=dtpwk169wfxby966ezgxzbq3t4&utm_source=review"
            target="_blank"
        >
          Читать на Яндексе
        </NuxtLink>
      </div>
    </div>
    <transition
        name="slide"
        @enter="setMaxHeight"
    >
      <div class="reviews__field" v-if="show">
        <div class="review">
          <img src="/img/reviews/r4.png" alt="">
          <NuxtLink
              class="review__button button-outline"
              to="https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=yynz7kqak9ujj2w3x7xfk13jnm&utm_source=review"
              target="_blank"
          >
            Читать на Яндексе
          </NuxtLink>
        </div>
        <div class="review">
          <img src="/img/reviews/r5.png" alt="">
          <NuxtLink
              class="review__button button-outline"
              to="https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=1zr0pur5up9a6xdbrf8k56uv94&utm_source=review"
              target="_blank"
          >
            Читать на Яндексе
          </NuxtLink>
        </div>
        <div class="review">
          <img src="/img/reviews/r6.png" alt="">
          <NuxtLink
              class="review__button button-outline"
              to="https://yandex.ru/maps/org/219417944033/reviews?reviews%5BpublicId%5D=5273ft370w843ua6m6fnaxakfw&utm_source=review"
              target="_blank"
          >
            Читать на Яндексе
          </NuxtLink>
        </div>
      </div>
    </transition>
    <NuxtLink
        class="button-toggle"
        :to="show ? '#reviews' : ''"
        @click="toggle"
        :class="{transform: show}"
    >
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 9L12.5 15L18.5 9" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      {{ buttonValue }}
    </NuxtLink>
  </section>
</template>

<style lang="scss">
.reviews{
  margin-bottom: 160px;

  &__field {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    width: 100%;

    @media (max-width: 570px) {
      grid-template-columns: 1fr;
    }

    @media (min-width: 571px) and (max-width: 845px){
      grid-template-columns: 1fr 1fr;
    }

    .review {
      background: white;
      padding: 12px;
      border: 1px solid #2222221A;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;

      &__button {
        margin-top: auto;
      }
    }
  }
}
</style>