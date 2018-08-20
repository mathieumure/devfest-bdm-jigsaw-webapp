<template>
  <section class="superhero-card">
      <img :src="superhero.logo" :alt="superhero.name" class="superhero-card__logo" @click="goToDetail">
      <div class="superhero-card__detail">
        <h2 class="superhero-card__title">{{superhero.name}}</h2>
        <div class="superhero-card__description">{{superhero.description}}</div>
      </div>
    </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SuperHero from "../entities/SuperHero";

@Component
export default class SuperheroCard extends Vue {
  @Prop({ required: true })
  superhero!: SuperHero;
  goToDetail() {
    this.$router.push("/characters/" + this.superhero.id);
  }
}
</script>
<style lang="stylus" scoped>
.superhero-card__logo {
  &:hover {
    cursor: pointer;
  }
}
</style>
