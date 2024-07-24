<script setup lang="ts">
import Header from "../components/Header.vue";
import MainBarber from "../components/MainBarber.vue";
import About from "../components/About.vue";
import Events from "../components/Events.vue";
import Reviews from "../components/Reviews.vue";
import Portfolio from "../components/portfolio/Portfolio.vue";
import Price from "../components/Price.vue";
import Team from "../components/Team.vue";
import Products from "../components/Products.vue";
import Loader from "../components/Loader.vue";
import Banner from "../components/Banner.vue";
import School from "../components/School.vue";
import Discount from "../components/Discount.vue";
</script>

<template>
  <Header />
  <main class="wrapper">
    <MainBarber />
    <About />
    <Events />
    <Reviews />
    <div class="black">
      <div class="marquee">
        <div class="marquee__item">
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
        </div>
        <div class="marquee__item" aria-hidden="true">
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
        </div>
      </div>
      <div class="marquee next">
        <div class="marquee__item reverse">
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
        </div>
        <div class="marquee__item reverse" aria-hidden="true">
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
          <div class="marquee__item-text">НЕ НАКРУЧИВАЕМ ОТЗЫВЫ</div>
        </div>
      </div>
      <Portfolio />
      <Price />
    </div>
    <Team />
    <Products />
    <Banner />
    <div class="black" id="school">
      <School />
      <Discount />
    </div>
    <Contacts />
  </main>
  <Footer />
<!--  <Loader />-->
</template>/

<style lang="scss">
@import "assets/styles/colors";
</style>