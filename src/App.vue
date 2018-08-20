<template>
  <router-view />
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

import "normalize.css";

export default class App extends Vue {}
</script>

<style lang="stylus">
body {
  background: url('/cover.jpg') fixed;
  background-size: 100vw 774px;
  width: calc(100vw - (100vw - 100%));
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Bangers', cursive;
}

header {
  min-height: 50px;
  background-color: #fff;
  padding: 25px 10px 10px 10px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 15px;
    display: block;
    background-color: white;
    transform-origin: bottom left;
    transform: rotate(-0.5deg) translate(-10px, 9px);
    border-bottom: solid 5px;
    box-shadow: 15px 15px rgba(0, 0, 0, 0.3);
  }

  h1 {
    margin: 5px;
  }
}

footer {
  min-height: 50px;
  background-color: #fff;
  padding: 10px 30px 5px 10px;
  position: relative;
  display: flex;
  align-items: center;
  border-top: solid 5px;

  // mobile
  @media screen and (max-width: 768px) {
    flex-direction: column;

    .copyright {
      order: -1;
    }
  }

  img {
    height: 25px;
  }

  .copyright {
    text-align: center;
    flex: 1 0 auto;
  }
}

main {
  flex: 1 0 auto;
  margin-top: 50px;
}

.superhero-card {
  margin: auto;
  width: 50%;
  background-color: white;
  display: flex;
  border: solid 5px;
  box-shadow: 15px 15px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  flex-direction: row;

  // Tablet
  @media screen and (max-width: 1024px) {
    width: 75%;
  }

  // mobile
  @media screen and (max-width: 768px) {
    flex-direction: column !important;

    &__logo {
      max-width: 195px;
    }
  }

  &:nth-child(even) {
    transform: skewX(5deg);
    flex-direction: row-reverse;
  }

  &:nth-child(odd) {
    transform: skewX(-5deg);
  }

  &__logo {
    max-height: 195px;
  }

  &__detail {
    padding: 0px 10px 10px 10px;
    flex: 1 1 auto;
  }
}

.search-link {
  position: absolute;
  top: 20px;
  right: 25px;

  img {
    width: 50px;
    height: 50px;
  }
}
</style>
