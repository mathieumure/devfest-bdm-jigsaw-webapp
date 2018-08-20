<template>
  <main>
    <div class="superhero-card" style="flex-direction: column;">
      <input type="text" class="search-superhero" role="searchbox" placeholder="Search for hero" :value="searchValue" @input="updateSearchValue">
      <div class="score" v-if="showDetail">
        <span>Score: {{ score }}</span>
        <range-slider class="slider" v-model="score" :min="0" :max="100" :step="1"/>
      </div>
      <button class="toggle-btn" @click="toggleShowDetail">{{ showDetail ? "-" : "+" }}</button>
    </div>
    <SuperheroCard :superhero="superhero" v-for="(superhero, idx) in heroes" :key="idx" />
    <router-link to="/infos" class="search-link">
      <img src="../assets/SHIELD.png" alt="">
    </router-link>
  </main>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import SuperheroCard from "../components/SuperheroCard.vue";
import SuperHero from "../entities/SuperHero";
import { getCharacters } from "../api/characters.api";
import RangeSlider from "vue-range-slider";

import "normalize.css";
import "vue-range-slider/dist/vue-range-slider.css";

@Component({
  components: { SuperheroCard, RangeSlider }
})
export default class App extends Vue {
  heroes: Array<SuperHero> = [];
  score: number = 90;
  showDetail: boolean = false;

  get searchValue(): string {
    return this.$route.query.search;
  }

  updateSearchValue($event: any): void {
    const search = $event.target.value;
    this.$router.push({ path: "/characters", query: { search } });
  }

  toggleShowDetail() {
    this.showDetail = !this.showDetail;
  }

  @Watch("searchValue")
  onUpdateSearchValue() {
    this.fetchData();
  }

  @Watch("score")
  onUpdatescore() {
    this.fetchData();
  }

  async fetchData() {
    this.heroes = await getCharacters(this.searchValue, this.score);
  }

  mounted() {
    this.fetchData();
  }
}
</script>
<style lang="stylus">
.search-superhero {
  flex: 1 1 auto;
  text-align: center;
  font-size: 1.5em;
}

.score {
  display: flex;
  padding: 5px;
}

.range-slider {
  width: auto;
  flex: 1 1 auto;
  .range-slider-fill {
    background-color: #00A7EB;
  }
  .range-slider-knob {
    border: solid;
  }
}

.toggle-btn {
  position: absolute;
  bottom: -21px;
  right: calc(50% - 15px);
  padding: 0;
  border: solid black 2px;
  bottom: -21px;
  line-height: 1em;
  background-color: #00A7EB;
  color: white;
  border-radius: 30px;
  font-size: 1.5em;
  width: 27px;

  &:hover {
    cursor: pointer;
  }
}
</style>
