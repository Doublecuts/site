<script setup lang="ts">
const show = ref(true)

const bodyScroll = () => {
  document.querySelector('body').classList.add('body-hidden')
}

const hideLoader = () => {
  setTimeout(() => {
    document.querySelector('body').classList.remove('body-hidden')
    show.value = false
  }, 2000)
}

onMounted(() => {
  bodyScroll()
  hideLoader()
})
</script>

<template>
  <transition
      name="nested"
  >
    <div id="preloader" v-if="show">
      <div id="loader"></div>
      <img class="loader-img" src="../assets/img/logo.png" alt="">
    </div>
  </transition>
</template>

<style lang="scss">
@import "assets/styles/colors";

#preloader{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #654ea3, #eaafc8);
  z-index: 10;
  display: flex;
}
#loader{
  display: block;
  position: relative;
  margin: auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: $purple;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
#loader:before{
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: $purple;
  -webkit-animation: spin 3s linear infinite;
  animation: spin 3s linear infinite;
}
#loader:after{
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: $purple;
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}
@-webkit-keyframes spin{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0%{
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader-img{
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>