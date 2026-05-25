<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="card">
      <button class="close-btn" @click="$emit('close')">×</button>
      <div class="sunflower-icon">🌻</div>
      <p class="message">"{{ wish.message }}"</p>
      <p class="name">— {{ wish.name }}</p>
      <p class="date">{{ formatDate(wish.createdAt) }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ wish: Object })
defineEmits(['close'])

function formatDate(iso) {
  const d = new Date(iso)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 16px;
}

.card {
  background: linear-gradient(160deg, #fffdf0, #fff8d6);
  border-radius: 20px;
  padding: 36px 28px 28px;
  max-width: 360px;
  width: 100%;
  text-align: center;
  position: relative;
  box-shadow: 0 8px 40px rgba(0,0,0,0.25);
  animation: popIn 0.25s ease;
}

@keyframes popIn {
  from { opacity: 0; transform: scale(0.85); }
  to   { opacity: 1; transform: scale(1); }
}

.close-btn {
  position: absolute;
  top: 12px; right: 16px;
  background: none; border: none;
  font-size: 22px; color: #bbb; cursor: pointer;
}
.close-btn:hover { color: #555; }

.sunflower-icon { font-size: 36px; margin-bottom: 12px; }

.message {
  font-size: 17px;
  color: #3a2800;
  line-height: 1.7;
  margin: 0 0 16px;
  font-style: italic;
  word-break: break-all;
}

.name {
  font-size: 14px;
  color: #8b6d2a;
  font-weight: 600;
  margin: 0 0 8px;
}

.date {
  font-size: 12px;
  color: #bbb;
  margin: 0;
}
</style>
