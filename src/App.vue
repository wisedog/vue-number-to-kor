<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>987654321은 {{ 987654321 | numberToKor(true) }}</div>
    <div>1131365은 한글(가격모드)로 {{ toKor(1131365) }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { numToKr } from '@/filters';

@Component
export default class App extends Vue {
  private toKor(val: number) {
    return numToKr(val);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
