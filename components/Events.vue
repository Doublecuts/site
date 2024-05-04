<script setup lang="ts">
const show = ref<boolean>(false)
const buttonValue = ref<string>('Смотреть все акции')

const toggle = () => {
  show.value = !show.value

  show.value
      ? buttonValue.value = 'Скрыть'
      : buttonValue.value = 'Смотреть все акции'
}

const setMaxHeight = (el: any) => {
  el.style.setProperty(
      '--max-height',
      el.scrollHeight + 'px'
  )
}
</script>

<template>
  <section class="events section" id="events">
    <h2>Акции</h2>
    <div class="events__block">
      <div class="event">
        <img class="event__image" src="../assets/img/event.jpg" alt="">
        <div class="event__info">
          <p class="event__info-title text-title">Скидка <span class="custom-back">15%<span></span></span> для новых клиентов</p>
          <p class="text">Дарим скидку  для новых гостей барбершопа.
            Не суммируется с другими акциями, комплексами</p>
          <button class="button-outline">Узнать подробнее</button>
        </div>
      </div>
      <div class="event">
        <img class="event__image" src="../assets/img/event.jpg" alt="">
        <div class="event__info">
          <p class="event__info-title text-title">Скидка <span class="custom-back">15%<span></span></span> для новых клиентов</p>
          <p class="text">Дарим скидку  для новых гостей барбершопа.
            Не суммируется с другими акциями, комплексами</p>
          <button class="button-outline">Узнать подробнее</button>
        </div>
      </div>
      <div class="event">
        <img class="event__image" src="../assets/img/event.jpg" alt="">
        <div class="event__info">
          <p class="event__info-title text-title">Скидка <span class="custom-back">15%<span></span></span> для новых клиентов</p>
          <p class="text">Дарим скидку  для новых гостей барбершопа.
            Не суммируется с другими акциями, комплексами</p>
          <button class="button-outline">Узнать подробнее</button>
        </div>
      </div>
    </div>
    <transition
        name="slide"
        @enter="setMaxHeight"
    >
      <div class="events__block" v-if="show">
        <div class="event">
          <img class="event__image" src="../assets/img/event.jpg" alt="">
          <div class="event__info">
            <p class="event__info-title text-title">Скидка <span class="custom-back">15%<span></span></span> для новых клиентов</p>
            <p class="text">Дарим скидку  для новых гостей барбершопа.
              Не суммируется с другими акциями, комплексами</p>
            <button class="button-outline">Узнать подробнее</button>
          </div>
        </div>
        <div class="event">
          <img class="event__image" src="../assets/img/event.jpg" alt="">
          <div class="event__info">
            <p class="event__info-title text-title">Скидка <span class="custom-back">15%<span></span></span> для новых клиентов</p>
            <p class="text">Дарим скидку  для новых гостей барбершопа.
              Не суммируется с другими акциями, комплексами</p>
            <button class="button-outline">Узнать подробнее</button>
          </div>
        </div>
        <div class="event">
          <img class="event__image" src="../assets/img/event.jpg" alt="">
          <div class="event__info">
            <p class="event__info-title text-title">Скидка <span class="custom-back">15%<span></span></span> для новых клиентов</p>
            <p class="text">Дарим скидку  для новых гостей барбершопа.
              Не суммируется с другими акциями, комплексами</p>
            <button class="button-outline">Узнать подробнее</button>
          </div>
        </div>
      </div>
    </transition>
    <button
        class="button-toggle"
        @click="toggle"
        :class="{transform: show}"
    >
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 9L12.5 15L18.5 9" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      {{ buttonValue }}
    </button>
  </section>
</template>

<style lang="scss">
@import "assets/styles/colors";

.events{
  &__block{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    @media (max-width: 570px) {
      grid-template-columns: 1fr;
    }

    @media (min-width: 571px) and (max-width: 845px){
      grid-template-columns: 1fr 1fr;
    }

    .event{
      &__image{
        border-radius: 12px 12px 0 0;
        object-fit: cover;
        width: 400px;
        height: 200px;
        z-index: 1;
        position: relative;

        @media (max-width: 570px) {
          width: 100%;
        }
      }

      &__info{
        display: flex;
        flex-direction: column;
        gap: 8px;
        background: white;
        border-radius: 12px;
        padding: 24px 20px 28px;
        margin-top: -20px;
        z-index: 2;
        position: relative;
        border: 1px solid #e9e9e9;
      }
    }
  }
}
</style>