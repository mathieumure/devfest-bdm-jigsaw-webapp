<template>
  <main @scroll="detectEndOfPage">
    <div class="character-card" style="flex-direction: column;">
      <input type="text" class="search-character" role="searchbox" placeholder="Search for character" :value="searchValue" @input="updateSearchValue">
      <div class="score">
        <span>Score: {{ score }}</span>
        <range-slider class="slider" v-model="score" :min="0" :max="100" :step="1"/>
      </div>
    </div>
    <Loader v-if="loading" />
    <CharacterCard :character="character" v-for="(character, idx) in displayedCharacters" :key="idx" />
    <router-link to="/infos" class="search-link">
      <img src="../assets/detail.png" alt="">
    </router-link>
  </main>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import CharacterCard from "../components/CharacterCard.vue";
import Loader from "../components/Loader.vue";
import Character from "../entities/Character";
import { getCharacters } from "../api/characters.api";
import RangeSlider from "vue-range-slider";

import "normalize.css";
import "vue-range-slider/dist/vue-range-slider.css";

@Component({
  components: { CharacterCard, RangeSlider, Loader }
})
export default class CharactersPage extends Vue {
  characters: Array<Character> = [];
  score: number = 90;
  showDetail: boolean = false;
  loading: boolean = false;
  currentPage: number = 1;

  get searchValue(): string {
    return this.$route.query.search;
  }

  get displayedCharacters(): Array<Character> {
    if (this.characters) {
      return this.characters.slice(0, 20 * this.currentPage);
    }
    return this.characters;
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
    this.loading = true;
    this.characters = await getCharacters(this.searchValue, this.score);
    this.loading = false;
  }

  mounted() {
    this.fetchData();
    window.addEventListener("scroll", this.detectEndOfPage);
  }

  detectEndOfPage() {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      this.currentPage = this.currentPage + 1;
    }
  }
}
</script>
<style lang="stylus">
.search-character {
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
    background-color: #fbcf22de;
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
