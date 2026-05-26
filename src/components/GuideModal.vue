<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="guide-card" :class="{ visible: shown }">

      <!-- Header -->
      <div class="guide-header">
        <span class="header-icon">🌻</span>
        <div>
          <div class="header-title">生日花海 · 使用指南</div>
          <div class="header-sub">种下你的祝福，等待花开</div>
        </div>
      </div>

      <!-- Body -->
      <div class="guide-body">

        <section class="guide-section">
          <div class="sec-title">🌱 这里是什么？</div>
          <p>这是一片专属的祝福花海。每提交一条留言，就会在花田里种下一朵向日葵，承载着你的心意，静静守候到花开的那一刻。</p>
        </section>

        <div class="divider"></div>

        <section class="guide-section">
          <div class="sec-title">✍️ 怎么种下一朵花？</div>
          <ul>
            <li>点击底部 <strong>「写下祝福 🌻」</strong> 按钮打开留言框</li>
            <li>留言是必填的，写下你最想说的话 💛</li>
            <li>署名可以不填，匿名也很温暖</li>
            <li>勾选 <strong>「提前公开」</strong> 后，6月26日前点开你的花就能看到内容；不勾选则以花苞形式保密等待</li>
          </ul>
        </section>

        <div class="divider"></div>

        <section class="guide-section">
          <div class="sec-title">🔒 花朵什么时候全部开放？</div>
          <div class="timeline">
            <div class="tl-item">
              <span class="tl-dot locked"></span>
              <div>
                <strong>6月26日 6:26 之前</strong><br>
                <span class="tl-desc">未公开的祝福以花苞的形式静静等待，内容保密</span>
              </div>
            </div>
            <div class="tl-item">
              <span class="tl-dot open"></span>
              <div>
                <strong>6月26日 6:26 之后</strong><br>
                <span class="tl-desc">所有花苞同时绽放，每朵向日葵都可以点开查看完整祝福</span>
              </div>
            </div>
          </div>
        </section>

        <div class="divider"></div>

        <section class="guide-section">
          <div class="sec-title">🎁 写完之后？</div>
          <p>提交后会有一颗种子落地动画，稍等片刻，你将收到一张来自花海主人的<strong>随机互动图片</strong>作为纪念 ✨</p>
        </section>

        <div class="divider"></div>

        <section class="guide-section">
          <div class="sec-title">🐰 还有什么好玩的？</div>
          <p>点击草地上蹦跳的小兔子，它们会说出随机的歌词和短句！</p>
        </section>

      </div>

      <!-- Footer button -->
      <div class="guide-footer">
        <button class="close-btn" @click="$emit('close')">知道啦，去种花 🌻</button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineEmits(['close'])

const shown = ref(false)
onMounted(() => setTimeout(() => { shown.value = true }, 40))
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
  z-index: 250;
  padding: 16px;
}

/* ── Card ── */
.guide-card {
  background: #fffdf0;
  border-radius: 20px;
  width: 100%;
  max-width: 440px;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  opacity: 0;
  transform: scale(0.9) translateY(16px);
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.guide-card.visible {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* ── Header ── */
.guide-header {
  background: linear-gradient(90deg, #e8a800 0%, #f5c518 50%, #e8a800 100%);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
}
.header-icon {
  font-size: 28px;
  line-height: 1;
}
.header-title {
  font-size: 16px;
  font-weight: 700;
  color: #5c3a00;
  letter-spacing: 1px;
}
.header-sub {
  font-size: 11px;
  color: #7a5200;
  margin-top: 2px;
  letter-spacing: 0.5px;
}

/* ── Scrollable body ── */
.guide-body {
  flex: 1;
  overflow-y: auto;
  padding: 20px 22px 12px;
  -webkit-overflow-scrolling: touch;
}

/* ── Section ── */
.guide-section {
  margin-bottom: 4px;
}
.sec-title {
  font-size: 13px;
  font-weight: 700;
  color: #5c3a00;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}
.guide-section p {
  font-size: 13px;
  color: #4a3010;
  line-height: 1.75;
  margin: 0;
}
.guide-section ul {
  margin: 0;
  padding-left: 18px;
  font-size: 13px;
  color: #4a3010;
  line-height: 1.9;
}
.guide-section ul li {
  margin-bottom: 2px;
}
.guide-section strong {
  color: #5c3a00;
}

/* ── Divider ── */
.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #e8c870, transparent);
  margin: 14px 0;
}

/* ── Timeline ── */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.tl-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 13px;
  color: #4a3010;
  line-height: 1.6;
}
.tl-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 3px;
}
.tl-dot.locked {
  background: #88c43a;
  box-shadow: 0 0 6px rgba(136, 196, 58, 0.6);
}
.tl-dot.open {
  background: #f5c518;
  box-shadow: 0 0 6px rgba(245, 197, 24, 0.7);
}
.tl-desc {
  font-size: 12px;
  color: #8a6030;
}

/* ── Footer ── */
.guide-footer {
  padding: 14px 22px 18px;
  flex-shrink: 0;
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
.close-btn:active {
  transform: translateY(0);
}
</style>
