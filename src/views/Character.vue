<template>
  <main>
    <SuperheroCard :superhero="hero" v-if="hero"/>
    <router-link to="/characters" class="search-link">
      <img src="../assets/wolverine.png" alt="">
    </router-link>
  </main>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import SuperheroCard from "../components/SuperheroCard.vue";
import SuperHero from "../entities/SuperHero";
import { getCharacter } from "../api/characters.api";

import "normalize.css";

@Component({
  components: { SuperheroCard }
})
export default class App extends Vue {
  hero: SuperHero | null = null;
  @Prop({ required: true })
  id!: string;

  async mounted() {
    this.hero = await getCharacter(Number.parseInt(this.id));
  }
}
</script>
<style lang="stylus">
.search-superhero {
  flex: 1 1 auto;
  text-align: center;
  font-size: 1.5em;
}
</style>
