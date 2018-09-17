<template>
  <main>
    <CharacterCard :character="character" v-if="character"/>
    <router-link to="/characters" class="search-link">
      <img src="../assets/search.png" alt="">
    </router-link>
  </main>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import CharacterCard from "../components/CharacterCard.vue";
import Character from "../entities/Character";
import { getCharacter } from "../api/characters.api";

import "normalize.css";

@Component({
  components: { CharacterCard }
})
export default class App extends Vue {
  character: Character | null = null;
  @Prop({ required: true })
  id!: string;

  async mounted() {
    this.character = await getCharacter(this.id);
  }
}
</script>
<style lang="stylus">
.search-character {
  flex: 1 1 auto;
  text-align: center;
  font-size: 1.5em;
}
</style>
