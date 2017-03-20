<template>
  <div id="app">
  <transition name="fade_in" mode="out-in">
    <router-view></router-view>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.fade_in-enter-active, .fade_in-leave-active {
  transition: opacity 0.3s linear
}
.fade_in-enter, .fade_in-leave-active {
  opacity: 0.3
}
</style>
