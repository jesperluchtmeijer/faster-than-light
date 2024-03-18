<script setup>

</script>

<template>
 <div class="flex justify-center">
  <div class="flex-col">
   <h1 class="text-3xl">Faster Than Light</h1>
   <div class="flex justify-between flex-row">
    <router-link to="/game">Game</router-link>
    <router-link to="/home">Home</router-link>
    <router-link to="/scores">Scores</router-link>
  
  </div>
   <router-view></router-view>
   </div>
</div>

</template>

<style>

</style>
