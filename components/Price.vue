<script setup lang="ts">
const tabs = ref([
  {
    key: 'young',
    label: 'Младший барбер',
    content: '1',
    dataShow: [
      {
        name: 'Премиум уход за лицом Volcano NEW Скидка 50% если не пробовали',
        price: '600',
      },
      {
        name: 'Экспресс Премиум уход за лицом Volcano NEW',
        price: '400',
      },
      {
        name: 'Устранение темных кругов под глазами',
        price: '200',
      },
      {
        name: 'Мужская стрижка',
        price: '700',
      },
      {
        name: 'Восковая депиляция нос/уши/брови',
        price: '200',
      },
    ],
    dataHidden: [
      {
        name: 'Детская стрижка',
        price: '700',
      },
      {
        name: 'Стрижка бороды',
        price: '400',
      },
      {
        name: 'Стрижка машинкой',
        price: '600',
      },
      {
        name: 'Коррекция стрижки',
        price: '600',
      },
      {
        name: 'Тонирование головы',
        price: '400',
      },
      {
        name: 'Тонирование бороды',
        price: '400',
      },
      {
        name: 'Бритье головы электробритвой под ноль',
        price: '600',
      },
      {
        name: 'Бритье бороды электробритвой под ноль',
        price: '600',
      },
      {
        name: 'Укладка волос',
        price: '350',
      },
    ]
  },
  {
    key: 'barber',
    label: 'Барбер',
    content: '2',
    dataShow: [
      {
        name: 'Премиум уход за лицом Volcano NEW Скидка 50% если не пробовали',
        price: '700',
      },
      {
        name: 'Экспресс Премиум уход за лицом Volcano NEW',
        price: '500',
      },
      {
        name: 'Устранение темных кругов под глазами',
        price: '300',
      },
      {
        name: 'Мужская стрижка',
        price: '1000',
      },
      {
        name: 'Восковая депиляция нос/уши/брови',
        price: '200',
      },
    ],
    dataHidden: [
      {
        name: 'Детская стрижка',
        price: '1000',
      },
      {
        name: 'Стрижка бороды',
        price: '500',
      },
      {
        name: 'Стрижка машинкой',
        price: '800',
      },
      {
        name: 'Коррекция стрижки',
        price: '800',
      },
      {
        name: 'Тонирование головы',
        price: '500',
      },
      {
        name: 'Тонирование бороды',
        price: '500',
      },
      {
        name: 'Бритье головы электробритвой под ноль',
        price: '700',
      },
      {
        name: 'Бритье бороды электробритвой под ноль',
        price: '700',
      },
      {
        name: 'Укладка волос',
        price: '500',
      },
    ]
  },
  {
    key: 'old',
    label: 'Старший барбер',
    content: '3',
    dataShow: [
      {
        name: 'Премиум уход за лицом Volcano NEW Скидка 50% если не пробовали',
        price: '800',
      },
      {
        name: 'Экспресс Премиум уход за лицом Volcano NEW',
        price: '600',
      },
      {
        name: 'Устранение темных кругов под глазами',
        price: '400',
      },
      {
        name: 'Консультация по Хим.завивке. Перед завивкой лучше прийти на консультацию',
        price: '600',
      },
      {
        name: 'Химическая завивка',
        price: '3500',
      },
    ],
    dataHidden: [
      {
        name: 'Мужская стрижка',
        price: '1200',
      },
      {
        name: 'Восковая депиляция нос/уши/брови',
        price: '300',
      },
      {
        name: 'Детская стрижка',
        price: '1200',
      },
      {
        name: 'Стрижка бороды',
        price: '700',
      },
      {
        name: 'Стрижка машинкой',
        price: '1000',
      },
      {
        name: 'Коррекция стрижки',
        price: '1000',
      },
      {
        name: 'Тонирование головы',
        price: '700',
      },
      {
        name: 'Тонирование бороды',
        price: '700',
      },
      {
        name: 'Бритье головы электробритвой под ноль',
        price: '900',
      },
      {
        name: 'Бритье бороды электробритвой под ноль',
        price: '900',
      },
      {
        name: 'Укладка волос',
        price: '600',
      },
    ]
  },
  {
    key: 'chief',
    label: 'Шефбарбер',
    content: '4',
    dataShow: [
      {
        name: 'Премиум уход за лицом Volcano NEW Скидка 50% если не пробовали',
        price: '900',
      },
      {
        name: 'Экспресс Премиум уход за лицом Volcano NEW',
        price: '700',
      },
      {
        name: 'Устранение темных кругов под глазами',
        price: '600',
      },
      {
        name: 'Стрижка',
        price: '1600',
      },
      {
        name: 'Восковая депиляция нос/уши/брови',
        price: '300',
      },
    ],
    dataHidden: [
      {
        name: 'Детская стрижка',
        price: '1600',
      },
      {
        name: 'Стрижка бороды',
        price: '1000',
      },
      {
        name: 'Стрижка машинкой',
        price: '1200',
      },
      {
        name: 'Коррекция стрижки',
        price: '1200',
      },
      {
        name: 'Тонирование головы',
        price: '1000',
      },
      {
        name: 'Тонирование бороды',
        price: '1000',
      },
      {
        name: 'Бритье головы электробритвой под ноль',
        price: '1000',
      },
      {
        name: 'Бритье бороды электробритвой под ноль',
        price: '1000',
      },
      {
        name: 'Укладка волос',
        price: '800',
      },
    ]
  },
])
const ui = {
  list: {
    base: '',
    background: 'bg-yellow tab-border tab-border-price',
    padding: '',

    tab: {
      base: '',
      background: '',
      active: 'tab-color',
      inactive: 'tab-gray'
    },

    marker: {
      wrapper: 'tab-bg',
    }
  },
}

const show = ref<boolean>(false)
const buttonValue = ref<string>('Смотреть все услуги')

const toggle = () => {
  show.value = !show.value

  show.value
      ? buttonValue.value = 'Скрыть'
      : buttonValue.value = 'Смотреть все услуги'
}

const setMaxHeight = (el: any) => {
  el.style.setProperty(
      '--max-height',
      el.scrollHeight + 'px'
  )
}
</script>

<template>
  <section class="price" id="price">
    <div class="price__pseudo left"></div>
    <div class="price__field">
      <h2 class="white">Услуги и цены</h2>
      <UTabs :items="tabs" :ui="ui">
        <template #item="{ item }">
          <div v-for="service in tabs" :key="service.key">
            <div class="service" v-if="item.key === service.key">
              <p class="service__title text-title">Основные услуги</p>
              <div class="service__list">
                <div
                    class="service__list-item"
                    v-for="list in service.dataShow"
                    :key="service.key"
                >
                  <p class="service__list-item_name text">{{ list.name }}</p>
                  <p class="service__list-item_value text-title"><span class="custom-back full-width">{{ list.price }}₽<span></span></span></p>
                </div>
              </div>
              <transition
                  name="slide"
                  @enter="setMaxHeight"
              >
                <div class="service__list" v-if="show">
                  <div
                      class="service__list-item"
                      v-for="list in service.dataHidden"
                      :key="service.key"
                  >
                    <p class="service__list-item_name text">{{ list.name }}</p>
                    <p class="service__list-item_value text-title"><span class="custom-back full-width">{{ list.price }}₽<span></span></span></p>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <NuxtLink
              class="button-toggle button-price"
              @click="toggle"
              :class="{transform: show}"
              :to="show ? '#price' : ''"
          >
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 9L12.5 15L18.5 9" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {{ buttonValue }}
          </NuxtLink>
        </template>
      </UTabs>
    </div>
    <div class="price__pseudo right"></div>
  </section>
</template>

<style lang="scss">
.price{
  padding: 160px 0;
  display: flex;
  align-items: stretch;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  .button-price {
    margin-top: 16px;
  }

  &__pseudo{
    background: #2F2F2F;
    width: 100%;

    @media (max-width: 1000px) {
      display: none;
    }

    &.left{
      border-radius: 0 12px 12px 0;
    }

    &.right{
      border-radius: 12px 0 0 12px;
    }
  }

  &__field{
    width: 100%;
    min-width: 820px;
    max-width: 820px;
    margin: 0 auto;
    border: 1px solid white;
    border-radius: 12px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 1000px) {
      padding: 0 20px;
      border: none;
      width: 100%;
      min-width: unset;
    }

    .service{
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 24px;

      &__title{
        color: white;
      }

      &__list{
        display: flex;
        flex-direction: column;
        gap: 0;

        &-item{
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 9px 0;

          &_name{
            color: white;
          }

          &_value{
            width: 60px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>