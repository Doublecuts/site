<script setup lang="ts">
const show = ref<boolean>(false)
const buttonValue = ref<string>('Смотреть все акции')
const isNewGuest = ref<boolean>(false)
const isFriend = ref<boolean>(false)
const isReview = ref<boolean>(false)
const isAdv = ref<boolean>(false)
const isHb = ref<boolean>(false)
const newGuestPoints = ref<string[]>([
    'Скидка не действует на товары.',
    'Скидка действует только для новых клиентов.',
    'Скидка действует на весь чек независимо от количества выбранных услуг в первый визит.',
    'Скидка не действует на услуги, которые идут уже со скидкой.',
    'Акции и скидки между собой не суммируются.',
])
const friendPoints = ref<string[]>([
    '1 балл = 1 рубль.',
    'Срок действия акции: неограниченно, бонусы хранятся до востребованности.',
    'Можно пригласить неограниченное количество друзей!',
    'Скидка не действует на товары.',
])
const reviewPoints = ref<string[]>([
    'За каждый оставленный отзыв на наших площадках скидка -5%.',
    'Площадки для отзывов: вк, яндекс карты, 2гис, Yclients - 20% максимальный размер скидки.',
    'Отзыв можно оставить только один раз на каждой из площадок.',
    'Допускается возможность размещения отзыва с одинаковым текстом на всех четырех площадках.',
    'Скидка не действует на услуги, которые идут уже со скидкой.',
    'Акции и скидки между собой не суммируются.',
    'Скидка не действует на товары.',
])
const advPoints = ref<string[]>([
    'Выложи пост или сторис отметив наш барбершоп и забирай скидку в 10%.',
    'Скидка не действует на услуги, которые идут уже со скидкой.',
    'Акции и скидки между собой не суммируются.',
    'Скидка не действует на товары.',
    'Скидка действует на весь чек независимо от количества выбранных услуг.',
])
const hbPoints = ref<string[]>([
    'В подарок вы получаете 30г оригинального китайского чая на выбор для знакомства с чайной культурой.',
    'Чай упаковывается в крафтовый пакет.',
    'В подарок можно выбрать только одну позицию чая.',
    'Акции и скидки между собой не суммируются.',
])

const modalUi = ref({
  wrapper: 'relative z-50',
  inner: 'fixed inset-0 overflow-y-auto modal__pos',
  container: 'flex min-h-full items-end sm:items-center justify-center text-center modal__mobile',
  padding: 'p-4 sm:p-0',
  margin: 'sm:my-8',
  base: 'relative text-left rtl:text-right flex flex-col',
  overlay: {
    base: 'fixed inset-0 transition-opacity',
    background: 'bg-gray-200/75 dark:bg-gray-800/75',
    transition: {
      enter: 'ease-out duration-300',
      enterFrom: 'opacity-0',
      enterTo: 'opacity-100',
      leave: 'ease-in duration-200',
      leaveFrom: 'opacity-100',
      leaveTo: 'opacity-0',
    },
  },
  background: 'bg-white dark:bg-gray-900',
  ring: '',
  rounded: 'rounded-lg',
  shadow: 'shadow-xl',
  width: 'w-full sm:max-w-lg',
  height: '',
  fullscreen: 'w-screen h-screen',
  transition: {
    enter: 'ease-out duration-300',
    enterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
    enterTo: 'opacity-100 translate-y-0 sm:scale-100',
    leave: 'ease-in duration-200',
    leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
    leaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
  },
})

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
        <img class="event__image" src="../assets/img/event.webp" alt="" loading="lazy">
        <div class="event__info">
          <p class="event__info-title text-title">Скидка на первый визит <span class="custom-back">20%<span></span></span></p>
          <p class="text">Дарим скидку  для новых гостей барбершопа</p>
          <button
              class="button-outline"
              @click="isNewGuest = true"
          >
            Узнать подробнее
          </button>
          <UModal v-model="isNewGuest" :ui="modalUi">
            <div class="event__info-modal">
              <p class="modal__title">Скидка на первый визит 20%!</p>
              <p class="modal__desc">Дарим скидку для новых гостей барбершопа.</p>
              <div class="modal__points">
                <div class="modal__points-item" v-for="item in newGuestPoints" :key="item">
                  <img src="/img/modal-point.svg" alt="" loading="lazy"/>
                  <p>{{ item }}</p>
                </div>
              </div>
              <NuxtLink
                  to="https://n748041.yclients.com/company/704044/personal/select-master?o=m2862252"
                  target="_blank"
                  class="main-barber__buttons-order"
              >
                <img src="../assets/img/order_img.webp" alt="" loading="lazy">
                <p class="main-barber__buttons-order_desktop">Записаться онлайн</p>
                <p class="main-barber__buttons-order_mobile">Записаться</p>
              </NuxtLink>
              <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="modal__close" @click="isNewGuest = false" />
            </div>
          </UModal>
        </div>
      </div>
      <div class="event">
        <img class="event__image" src="../assets/img/event.webp" alt="" loading="lazy">
        <div class="event__info">
          <p class="event__info-title text-title">Приведи друга и получи <span class="custom-back">200р<span></span></span></p>
          <p class="text">Приведи друга, который у нас ещё не был</p>
          <button
              class="button-outline"
              @click="isFriend = true"
          >
            Узнать подробнее
          </button>
          <UModal v-model="isFriend" :ui="modalUi">
            <div class="event__info-modal">
              <p class="modal__title">Приведи друга и получи 200р</p>
              <p class="modal__desc">Приведите  друга, который у нас ещё не был, начислим 200 баллов вам и другу
                на бонусный счёт в Барбершопе Double Cuts! </p>
              <div class="modal__points">
                <div class="modal__points-item" v-for="item in friendPoints" :key="item">
                  <img src="/img/modal-point.svg" alt="" loading="lazy"/>
                  <p>{{ item }}</p>
                </div>
              </div>
              <p class="modal__mini">Скидка действует на весь чек независимо от количества выбранных услуг в первый визит.<br>
                Скидка не действует на услуги, которые идут уже со скидкой.<br>
                Акции и скидки между собой не суммируются.
              </p>
              <NuxtLink
                  to="https://n748041.yclients.com/company/704044/personal/select-master?o=m2862252"
                  target="_blank"
                  class="main-barber__buttons-order"
              >
                <img src="../assets/img/order_img.webp" alt="" loading="lazy">
                <p class="main-barber__buttons-order_desktop">Записаться онлайн</p>
                <p class="main-barber__buttons-order_mobile">Записаться</p>
              </NuxtLink>
              <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="modal__close" @click="isFriend = false" />
            </div>
          </UModal>
        </div>
      </div>
      <div class="event">
        <img class="event__image" src="../assets/img/event.webp" alt="" loading="lazy">
        <div class="event__info">
          <p class="event__info-title text-title">Скидка за отзыв до <span class="custom-back">20%<span></span></span></p>
          <p class="text">Оставь отзыв после визита и получи скидку</p>
          <button
              class="button-outline"
              @click="isReview = true"
          >
            Узнать подробнее
          </button>
          <UModal v-model="isReview" :ui="modalUi">
            <div class="event__info-modal">
              <p class="modal__title">Скидка за отзыв до 20%</p>
              <p class="modal__desc">Оставь отзыв после визита и получи скидку</p>
              <div class="modal__points">
                <div class="modal__points-item" v-for="item in reviewPoints" :key="item">
                  <img src="/img/modal-point.svg" alt="" loading="lazy"/>
                  <p>{{ item }}</p>
                </div>
              </div>
              <NuxtLink
                  to="https://n748041.yclients.com/company/704044/personal/select-master?o=m2862252"
                  target="_blank"
                  class="main-barber__buttons-order"
              >
                <img src="../assets/img/order_img.webp" alt="" loading="lazy">
                <p class="main-barber__buttons-order_desktop">Записаться онлайн</p>
                <p class="main-barber__buttons-order_mobile">Записаться</p>
              </NuxtLink>
              <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="modal__close" @click="isReview = false" />
            </div>
          </UModal>
        </div>
      </div>
    </div>
    <transition
        name="slide"
        @enter="setMaxHeight"
    >
      <div class="events__block" v-if="show">
        <div class="event">
          <img class="event__image" src="../assets/img/event.webp" alt="" loading="lazy">
          <div class="event__info">
            <p class="event__info-title text-title">Скидка за рекламу <span class="custom-back">10%<span></span></span></p>
            <p class="text">Прорекламируй нас в социальных сетях</p>
            <button
                class="button-outline"
                @click="isAdv = true"
            >
              Узнать подробнее
            </button>
            <UModal v-model="isAdv" :ui="modalUi">
              <div class="event__info-modal">
                <p class="modal__title">Скидка за рекламу 10%</p>
                <p class="modal__desc">Прорекламируйте нас в социальных сетях</p>
                <div class="modal__points">
                  <div class="modal__points-item" v-for="item in advPoints" :key="item">
                    <img src="/img/modal-point.svg" alt="" loading="lazy"/>
                    <p>{{ item }}</p>
                  </div>
                </div>
                <NuxtLink
                    to="https://n748041.yclients.com/company/704044/personal/select-master?o=m2862252"
                    target="_blank"
                    class="main-barber__buttons-order"
                >
                  <img src="../assets/img/order_img.webp" alt="" loading="lazy">
                  <p class="main-barber__buttons-order_desktop">Записаться онлайн</p>
                  <p class="main-barber__buttons-order_mobile">Записаться</p>
                </NuxtLink>
                <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="modal__close" @click="isAdv = false" />
              </div>
            </UModal>
          </div>
        </div>
        <div class="event">
          <img class="event__image" src="../assets/img/event.webp" alt="" loading="lazy">
          <div class="event__info">
            <p class="event__info-title text-title">День Рождения</p>
            <p class="text">Получите подарок от нас в день рождения </p>
            <button
                class="button-outline"
                @click="isHb = true"
            >
              Узнать подробнее
            </button>
            <UModal v-model="isHb" :ui="modalUi">
              <div class="event__info-modal">
                <p class="modal__title">День Рождения</p>
                <p class="modal__desc">Получите подарок от нас в день рождения </p>
                <p class="modal__desc">Срок действия акции неделя до, неделя после.
                  Предъявите администратору паспорт или свидетельство о рождении для активации акции. </p>
                <div class="modal__points">
                  <div class="modal__points-item" v-for="item in hbPoints" :key="item">
                    <img src="/img/modal-point.svg" alt="" loading="lazy"/>
                    <p>{{ item }}</p>
                  </div>
                </div>
                <NuxtLink
                    to="https://n748041.yclients.com/company/704044/personal/select-master?o=m2862252"
                    target="_blank"
                    class="main-barber__buttons-order"
                >
                  <img src="../assets/img/order_img.webp" alt="" loading="lazy">
                  <p class="main-barber__buttons-order_desktop">Записаться онлайн</p>
                  <p class="main-barber__buttons-order_mobile">Записаться</p>
                </NuxtLink>
                <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="modal__close" @click="isHb = false" />
              </div>
            </UModal>
          </div>
        </div>
      </div>
    </transition>
    <NuxtLink
        class="button-toggle"
        :to="show ? '#events' : ''"
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
@import "assets/styles/colors";

.events{
  &__block{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    @media (max-width: 570px) {
      grid-template-columns: 1fr;
      width: 100%;
    }

    @media (min-width: 571px) and (max-width: 845px){
      grid-template-columns: 1fr 1fr;
    }

    .event{
      position: relative;

      @media (max-width: 570px) {
        width: 100%;
      }

      &__image{
        border-radius: 12px 12px 0 0;
        object-fit: fill;
        width: 400px;
        height: 150px;
        z-index: 1;
        position: relative;

        @media (max-width: 570px) {
          width: 100%;
          height: 130px;
        }
      }

      &__info{
        display: flex;
        flex-direction: column;
        gap: 8px;
        background: white;
        border-radius: 12px;
        padding: 24px 20px 28px;
        margin-top: -10px;
        z-index: 2;
        position: relative;
        border: 1px solid #e9e9e9;
      }
    }
  }
}

.event__info-modal {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  margin: 0 auto;

  .modal__title {
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
  }

  .modal__points {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 4px;

    &-item {
      display: flex;
      align-items: center;
      gap: 5px;

      p {
        font-size: 16px;
        line-height: 22px;
      }
    }
  }

  .main-barber__buttons-order{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: $pink;
    font-size: 16px;
    line-height: 1.2;
    color: $black;
    border-radius: 8px;
    padding: 13px 24px;
    margin-top: 12px;

    &_mobile {
      display: none;
    }

    @media (max-width: 430px) {
      &_desktop {
        display: none;
      }

      &_mobile {
        display: block;
      }
    }

    &:hover {
      background: $purple;
      color: white;

      &_desktop {
        color: white;
      }
    }
  }

  .modal__close {
    position: absolute;
    right: 5px;
    top: 5px;
  }

  .modal__mini {
    font-size: 12px;
    line-height: 17px;
    margin-top: 8px;
  }
}
</style>