<template>
  <main>
    <div class="superhero-card">
      <div class="superhero-card__detail" v-if="info">
        <h2 class="superhero-card__title">Infos</h2>
        <div class="superhero-card__description"><span class="title">JAVA SPECIFICATION VERSION</span> {{info.javaSpecificationVersion}}</div>
        <div class="superhero-card__description"><span class="title">JAVA VERSION</span> {{info.javaVersion}}</div>
        <div class="superhero-card__description"><span class="title">JAVA VENDOR</span> {{info.javaVendor}}</div>
        <div class="superhero-card__description"><span class="title">MODULE NAME</span> {{info.moduleName}}</div>
        <div class="superhero-card__description" style="display: flex">
          <span class="title">LOADED MODULES</span>
          <div class="chips">
            <span class="chip" v-for="mod in info.modules" :key="mod">{{mod}}</span>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/characters" class="search-link">
      <img src="../assets/wolverine.png" alt="">
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
.superhero-card {
  padding: 5px;
}

.title {
  width: 150px;
  display: inline-block;
  color: #666666;
  margin-right: 20px;
}

.chips {
  display: flex;
  flex-direction: column;
  margin-top: 5px;
}

.chip {
  font-size: 0.9em;
}
</style>
