<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="gallery">

      <!-- 标题 -->
      <div class="gallery-header">
        <div class="title">📷 我的互动 · 时光相册</div>
        <div class="subtitle">共 {{ images.length }} 张回忆</div>
      </div>

      <!-- 缩略图网格 -->
      <div class="grid-body">
        <button
          v-for="(img, i) in images"
          :key="img.src"
          class="thumb"
          @click="active = i"
        >
          <img :src="img.src" :alt="img.date" class="thumb-img" @error="onImgError" />
          <span class="thumb-date">{{ img.date }}</span>
        </button>
      </div>

      <!-- 关闭按钮 -->
      <div class="footer">
        <button class="close-btn" @click="$emit('close')">收起相册 ✨</button>
      </div>

      <!-- 放大查看单张 -->
      <div v-if="active !== null" class="lightbox" @click.self="active = null">
        <div class="lightbox-card">
          <div class="date-strip">
            <span class="star">✦</span>
            <span class="date-text">{{ images[active].date }}</span>
            <span class="star">✦</span>
          </div>
          <div class="photo-wrap">
            <img :src="images[active].src" :alt="images[active].date" class="photo" @error="onImgError" />
          </div>
          <div class="lightbox-body">
            <p class="story">{{ images[active].caption }}</p>
            <button class="lightbox-close" @click="active = null">收好啦 ✨</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { thankYouImages } from '../data/birthdayImages.js'

defineEmits(['close'])

const images = thankYouImages
const active = ref(null)

function onImgError(e) {
  e.target.style.visibility = 'hidden'
}
</script>

<style scoped>
/* ── Overlay ── */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 16px;
}

/* ── Gallery card ── */
.gallery {
  background: #fffdf0;
  border-radius: 20px;
  width: 100%;
  max-width: 460px;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  animation: popIn 0.3s ease;
  position: relative;
}

@keyframes popIn {
  from { opacity: 0; transform: scale(0.92) translateY(16px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

/* ── Header ── */
.gallery-header {
  background: linear-gradient(90deg, #e8a800 0%, #f5c518 50%, #e8a800 100%);
  padding: 18px 24px 14px;
  text-align: center;
  flex-shrink: 0;
}
.title {
  font-size: 17px;
  font-weight: 700;
  color: #5c3a00;
  letter-spacing: 1.5px;
}
.subtitle {
  font-size: 12px;
  color: #7a5200;
  margin-top: 4px;
  letter-spacing: 1px;
}

/* ── Thumbnail grid ── */
.grid-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  -webkit-overflow-scrolling: touch;
}

.thumb {
  position: relative;
  border: none;
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 1;
  background: #f3ead0;
  box-shadow: 0 2px 8px rgba(232, 168, 0, 0.18);
  transition: transform 0.15s, box-shadow 0.15s;
}
.thumb:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(232, 168, 0, 0.35);
}
.thumb:active { transform: translateY(0); }

.thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.thumb-date {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 8px 6px 5px;
  font-size: 10px;
  color: #fff;
  text-align: center;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.55));
  letter-spacing: 0.3px;
}

/* ── Footer ── */
.footer {
  padding: 14px 24px 18px;
  flex-shrink: 0;
  background: #fffdf0;
  border-top: 1px solid #f0e8c0;
}
.close-btn {
  width: 100%;
  background: linear-gradient(135deg, #f5c518, #e8a800);
  color: #5c3a00;
  border: none;
  border-radius: 12px;
  padding: 13px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  transition: transform 0.15s, box-shadow 0.15s;
}
.close-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(245, 197, 24, 0.5);
}
.close-btn:active { transform: translateY(0); }

/* ── Lightbox (single photo) ── */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 300;
  padding: 16px;
  animation: popIn 0.2s ease;
}
.lightbox-card {
  background: #fffdf0;
  border-radius: 20px;
  overflow: hidden;
  max-width: 360px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.4);
}
.date-strip {
  background: linear-gradient(90deg, #e8a800 0%, #f5c518 50%, #e8a800 100%);
  color: #5c3a00;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 11px 20px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  flex-shrink: 0;
}
.star { font-size: 8px; opacity: 0.6; }
.photo-wrap {
  width: 100%;
  overflow: hidden;
  background: #fffdf0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.photo {
  width: 100%;
  height: auto;
  max-height: 50vh;
  object-fit: contain;
  display: block;
}
.lightbox-body {
  padding: 16px 22px 20px;
  text-align: center;
  overflow-y: auto;
}
.story {
  font-size: 14px;
  color: #5c3a00;
  line-height: 1.9;
  margin: 0 0 16px;
  font-style: italic;
  letter-spacing: 0.3px;
  white-space: pre-line;
}
.lightbox-close {
  width: 100%;
  background: linear-gradient(135deg, #f5c518, #e8a800);
  color: #5c3a00;
  border: none;
  border-radius: 12px;
  padding: 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  transition: transform 0.15s, box-shadow 0.15s;
}
.lightbox-close:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(245, 197, 24, 0.55);
}
.lightbox-close:active { transform: translateY(0); }
</style>
