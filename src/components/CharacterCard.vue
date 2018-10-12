<template>
  <section class="character-card">
      <img :src="character.logo" :alt="character.name" class="character-card__logo" @click="goToDetail">
      <div class="character-card__delimiter" />
      <div class="character-card__detail">
        <h2 class="character-card__title">{{character.name}}</h2>
        <div class="character-card__description">{{character.description}}</div>
        <div class="character-card__icon" />
      </div>
    </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Character from "../entities/Character";

@Component
export default class CaracterCard extends Vue {
  @Prop({ required: true })
  character!: Character;
  goToDetail() {
    this.$router.push("/characters/" + this.character.id);
  }
}
</script>
<style lang="stylus" scoped>
.character-card__logo {
  &:hover {
    cursor: pointer;
  }
}

.character-card {
  margin: auto;
  width: 50%;
  border-radius: 6px 0px 0px 6px;
  color: white;
  background-color: #282727;
  display: flex;
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

  &__logo {
    max-height: 195px;
    min-width: 180px;
    border-radius: 6px 0px;
  }

  &__delimiter {
    border: solid 1px rgb(50, 115, 197);
  }

  &__icon {
    background-image: url("../assets/bottom-icon.png");
    position: absolute;
    bottom: 0;
    right: 0;
    background-size: 300% 200%;
    width: 50px;
    height: 50px;
    opacity: 0.16;
  }

  &__detail {
    padding: 0px 60px 10px 15px;
    flex: 1 1 auto;
    background-image: url('../assets/bg_hash_top.png');
    background-size: 7px;
    background-repeat: repeat-x;
    background-position: top left;
    position: relative;
    &:after, &:before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 10px;
      height: 30%;
      right: 0;
      transform: translate(100%);
      border-left: 6px solid #282727;
    }
    &:after {
      bottom: 0;
      border-top: 6px solid transparent;
    }
    &:before {
      top: 0;
      border-bottom: 6px solid transparent;
    }
  }

  &__description {
    color: #aaa;
    font-size: 0.8em;
  }
}
</style>
