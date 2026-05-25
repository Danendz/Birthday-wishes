<template>
  <teleport to="body">
    <div class="anim-container" v-if="active">
      <div class="seed" :class="phase >= 1 ? 'fall' : ''"></div>
      <div v-if="phase >= 2" class="sprout-grow"></div>
      <div v-if="phase >= 3" class="flower-grow">
        <div class="anim-head">
          <div class="anim-petals">
            <div v-for="i in 12" :key="i" class="anim-petal" :style="{ transform: `rotate(${i*30}deg)` }"></div>
          </div>
          <div class="anim-center"></div>
        </div>
        <div class="anim-stem"></div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['done'])
const active = ref(true)
const phase = ref(0)

onMounted(() => {
  setTimeout(() => { phase.value = 1 }, 50)
  setTimeout(() => { phase.value = 2 }, 700)
  setTimeout(() => { phase.value = 3 }, 1250)
  setTimeout(() => { active.value = false; emit('done') }, 2100)
})
</script>

<style scoped>
.anim-container {
  position: fixed;
  bottom: 38%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 160px;
  width: 80px;
}

.seed {
  width: 10px; height: 14px;
  background: radial-gradient(ellipse, #a07030, #6b4a10);
  border-radius: 50% 50% 40% 40%;
  position: absolute;
  top: 0;
}
.seed.fall {
  animation: seedFall 0.6s cubic-bezier(0.4,0,1,1) forwards;
}
@keyframes seedFall {
  from { top: 0; opacity: 1; }
  to   { top: 130px; opacity: 0.6; transform: scale(0.7); }
}

.sprout-grow {
  position: absolute;
  bottom: 0;
  width: 4px;
  background: #5a8c45;
  border-radius: 2px;
  animation: sproutUp 0.5s ease-out forwards;
  transform-origin: bottom;
}
@keyframes sproutUp {
  from { height: 0; }
  to   { height: 28px; }
}

.flower-grow {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: flowerGrow 0.8s ease-out forwards;
  transform-origin: bottom;
}
@keyframes flowerGrow {
  from { transform: scaleY(0); opacity: 0.5; }
  to   { transform: scaleY(1); opacity: 1; }
}

.anim-stem {
  width: 5px; height: 70px;
  background: linear-gradient(to bottom, #4A7C3F, #3a6030);
  border-radius: 3px;
  margin-top: -8px;
}
.anim-head {
  width: 50px; height: 50px;
  position: relative;
  display: flex; align-items: center; justify-content: center;
}
.anim-petals {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
}
.anim-petal {
  position: absolute;
  width: 11px; height: 22px;
  background: linear-gradient(to bottom, #FFE033, #E8A800);
  border-radius: 50% 50% 40% 40%;
  transform-origin: bottom center;
  top: 2px;
}
.anim-center {
  width: 24px; height: 24px;
  background: radial-gradient(circle, #7a3a0a 30%, #5c2a00 100%);
  border-radius: 50%;
  position: relative; z-index: 1;
}
</style>
