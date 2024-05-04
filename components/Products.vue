<script setup lang="ts">
const productsShow = ref([
  {
    src: '/img/products/haircut.jpg',
    title: 'Набор для бритья',
    description: 'Подарочный набор для бритья',
    href: 'https://vk.com/market-204363189?screen=group&w=product-204363189_8905117%2Fquery',
  },
  {
    src: '/img/products/morgans.jpg',
    title: 'Набор укладочный',
    description: 'Подарочный набор Morgan`s',
    href: 'https://vk.com/market-204363189?screen=group&w=product-204363189_8905104%2Fquery',
  },
  {
    src: '/img/products/boroda.jpg',
    title: 'Набор для ухода за бородой',
    description: 'Подарочный набор для ухода за бородой',
    href: 'https://vk.com/market-204363189?screen=group&w=product-204363189_8905003%2Fquery',
  },
])

const productsHide = ref([
  {
    src: '/img/products/max_texture.jpg',
    title: 'Набор укладочный Max Texture',
    description: 'Премиальный подарочный набор для укладки',
    href: 'https://vk.com/market-204363189?screen=group&w=product-204363189_8905060%2Fquery',
  },
  {
    src: '/img/products/powder.jpg',
    title: 'Набор укладочный',
    description: 'Подарочный набор для укладки',
    href: 'https://vk.com/market-204363189?screen=group&w=product-204363189_8904877%2Fquery',
  },
  {
    src: '/img/products/shampoo.jpg',
    title: 'Набор шампуней Morgan`s',
    description: 'Подарочный набор шампуней Morgan`s',
    href: 'https://vk.com/market-204363189?screen=group&w=product-204363189_8904868%2Fquery',
  },
  {
    src: '/img/products/texture.jpg',
    title: 'Набор укладочный Texture',
    description: 'Подарочный набор для легкой укладки',
    href: 'https://vk.com/market-204363189?screen=group&w=product-204363189_8904794%2Fquery',
  },
  {
    src: '/img/products/ollin.jpg',
    title: 'Набор очищение и уход',
    description: 'Подарочный набор для ухода',
    href: 'https://vk.com/market-204363189?screen=group&w=product-204363189_8904750%2Fquery',
  },
  {
    src: '/img/products/glina1.jpg',
    title: 'Глина Текстурирующая Морганс',
    description: 'Глина для волос',
    href: 'https://vk.com/market-204363189?screen=group&w=product-204363189_7122069%2Fquery',
  },
  {
    src: '/img/products/glina2.jpg',
    title: 'Матовая Паста Морганс',
    description: 'С ароматом бразильского апельсина',
    href: 'https://vk.com/market-204363189?screen=group&w=product-204363189_7122068%2Fquery',
  },
  {
    src: '/img/products/spray.jpg',
    title: 'Спрей «Морская соль» Kondor',
    description: 'Спрей для укладки',
    href: 'https://vk.com/market-204363189?screen=group&w=product-204363189_7115791%2Fquery',
  },
  {
    src: '/img/products/glina3.jpg',
    title: 'Пудра для волос Kapous',
    description: 'Пудра для волос',
    href: 'https://vk.com/market-204363189?screen=group&w=product-204363189_7115789%2Fquery',
  },
])

const show = ref<boolean>(false)
const buttonValue = ref<string>('Смотреть все товары')

const toggle = () => {
  show.value = !show.value

  show.value
      ? buttonValue.value = 'Скрыть'
      : buttonValue.value = 'Смотреть все товары'
}

const setMaxHeight = (el: any) => {
  el.style.setProperty(
      '--max-height',
      el.scrollHeight + 'px'
  )
}
</script>

<template>
  <section class="products section" id="products">
    <h2>Товары</h2>
    <div class="products__field">
      <NuxtLink
          class="product"
          v-for="product in productsShow"
          :key="product"
          :to="product.href"
          target="_blank"
      >
        <img :src="product.src" alt="" class="product__img">
        <div class="product__info">
          <p class="text-title">{{ product.title }}</p>
          <p class="product__info-desc text">{{ product.description }}</p>
        </div>
      </NuxtLink>
    </div>
    <transition
        name="slide"
        @enter="setMaxHeight"
    >
      <div class="products__field" v-if="show">
        <NuxtLink
            class="product"
            v-for="product in productsHide"
            :key="product"
            :to="product.href"
            target="_blank"
        >
          <img :src="product.src" alt="" class="product__img">
          <div class="product__info">
            <p class="text-title">{{ product.title }}</p>
            <p class="product__info-desc text">{{ product.description }}</p>
          </div>
        </NuxtLink>
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
.products{
  &__field{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .product{
      display: flex;
      flex-direction: column;
      transition: 0.3s;

      &:hover{
        transform: scale(1.05);
      }

      &__img{
        position: relative;
        z-index: 0;
        width: 400px;
        height: 240px;
        object-fit: cover;
        border-radius: 12px 12px 0 0;
      }

      &__info{
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
        background: white;
        border-radius: 12px;
        border: 1px solid #e9e9e9;
        border-top: none;
        margin-top: -24px;
        padding: 24px 20px 28px;

        &-desc{
          color: #919191;
        }
      }
    }
  }
}
</style>