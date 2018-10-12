<template>
    <canvas class="hyperspace" />
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { setTimeout } from "timers";

@Component
export default class Loader extends Vue {
  ctx: any = null;
  particles: Array<any> = [];
  w: number = 0;
  h: number = 0;
  spawnRadius: number = 0;
  speed: number = 0;

  mounted() {
    let canvas = this.$el as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (canvas.getContext) {
      let ctx = canvas.getContext("2d");
      if (!ctx) {
        return;
      }
      this.ctx = ctx;
      this.w = canvas.width;
      this.h = canvas.height;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      this.spawnRadius = 300;
      this.speed = this.spawnRadius / 50;

      let init = [];
      let maxParts = 200;

      for (let a = 0; a < maxParts; a++) {
        let initX =
          this.w / 2 + Math.random() * this.spawnRadius - this.spawnRadius / 2;
        let initY =
          this.h / 2 + Math.random() * this.spawnRadius - this.spawnRadius / 2;

        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);

        init.push({
          x: initX,
          y: initY,
          xs: (initX - this.w / 2) / this.speed,
          ys: (initY - this.h / 2) / this.speed,
          l: Math.random() * 5,
          color: "rgb(" + r + "," + g + "," + b + ")"
        });
      }

      this.particles = [];
      for (let b = 0; b < maxParts; b++) {
        this.particles[b] = init[b];
      }

      setTimeout(this.draw, 30);
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.w, this.h);
    for (let c = 0; c < this.particles.length; c++) {
      let p = this.particles[c];
      this.ctx.strokeStyle = "rgba(255,255,255," + p.l / 20 + ")";
      this.ctx.beginPath();
      this.ctx.moveTo(p.x, p.y);
      this.ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
      this.ctx.stroke();
    }
    this.move();
    setTimeout(this.draw, 30);
  }

  move() {
    for (let b = 0; b < this.particles.length; b++) {
      let p = this.particles[b];
      p.x += p.xs;
      p.y += p.ys;

      // if particle position exceeds the canvas
      if (p.x < 0 || p.y < 0 || p.x > this.w || p.y > this.h) {
        p.x =
          this.w / 2 + Math.random() * this.spawnRadius - this.spawnRadius / 2;
        p.y =
          this.h / 2 + Math.random() * this.spawnRadius - this.spawnRadius / 2;
        p.xs = (p.x - this.w / 2) / this.speed;
        p.ys = (p.y - this.h / 2) / this.speed;
      }
    }
  }
}
</script>
<style scoped>
.hyperspace {
  width: 100%;
  height: 68vh;
}
</style>
