<template>
  <main>
    <audio src="/opening.mp3" autoplay></audio>
    <div class="starwars-scroll" v-if="info">
      <div class="starwars-scroll__content" v-for="i in 4" :key="'content_' + i" :class="'starwars-scroll__content__' + i">
        <div class="starwars-scroll__title">Information</div>
        <br>
        <p>JAVA SPECIFICATION VERSION: {{info.javaSpecificationVersion}}</p>
        <p>JAVA VERSION: {{info.javaVersion}}</p>
        <p>JAVA VENDOR: {{info.javaVendor}}</p>
        <p>MODULE NAME: {{info.moduleName}}</p>
        <br>
        <div class="starwars-scroll__subtitle">LOADED MODULES</div>
        <br>
        <p></p>
        <p v-for="mod in info.modules" :key="mod">{{mod}}</p>
      </div>
      
    </div>
    <router-link to="/characters" class="search-link">
      <img src="../assets/search.png" alt="">
    </router-link>
  </main>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Infos from "../entities/Infos";
import { getInfos } from "../api/characters.api";

import "normalize.css";

@Component
export default class App extends Vue {
  info: Infos | null = null;
  async mounted() {
    this.info = await getInfos();
  }
}
</script>
<style lang="stylus" scoped>
.starwars-scroll {
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  transform: perspective(500px) rotateX(25deg);
  transform-origin: 50% 100%;
  text-align: justify;
  position: absolute;
  margin-left: -9em;
  font-weight: bold;
  overflow: hidden;
  font-size: 350%;
  height: 50em;
  width: 18em;
  bottom: 0;
  left: 50%;

  &:after {
    position: absolute;
    content: ' ';
    bottom: 60%;
    left: 0;
    right: 0;
    top: 0;
  }

  &__content {
    animation: scroll 40s infinite;
    position: absolute;
    top: 100%;
    margin-bottom: 25%;
    max-width: 100%;

    p {
      overflow-wrap: break-word;
      font-size: 0.5em;
    }
  }

  for num in (1..4) {
    &__content__{num} {
      animation: scroll 40s linear 40s * (num - 1) infinite;
      position: absolute;
      top: 100%;
      margin-bottom: 50%;
    }
  }
  
  
  &__title, &__subtitle {
    text-align: center;
  }
}

@keyframes scroll {
    0% {
        top: 100%;
    }
    100% {
        top: -40%;
    }
}
</style>
