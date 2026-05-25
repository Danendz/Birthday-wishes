<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-box">
      <button class="close-btn" @click="$emit('close')">×</button>
      <h2 class="modal-title">🌻 写下你的祝福</h2>

      <div class="field">
        <label>留言 <span class="required">*</span></label>
        <textarea
          v-model="message"
          placeholder="写下想说的话吧～"
          maxlength="200"
          rows="4"
        />
        <span class="char-count">{{ message.length }} / 200</span>
      </div>

      <div class="field">
        <label>署名</label>
        <input v-model="name" type="text" placeholder="匿名朋友（可不填）" maxlength="20" />
      </div>

      <div class="field checkbox-field">
        <label class="checkbox-label">
          <input v-model="isPublic" type="checkbox" />
          <span class="checkbox-text">
            提前公开
            <small>（勾选后，6月26日前点向日葵就能看到你的祝福）</small>
          </span>
        </label>
      </div>

      <p v-if="error" class="error-msg">{{ error }}</p>

      <button class="submit-btn" @click="submit">送出祝福 🌻</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close', 'submit'])

const message = ref('')
const name = ref('')
const isPublic = ref(false)
const error = ref('')

function submit() {
  if (!message.value.trim()) {
    error.value = '请写下你想说的话 💛'
    return
  }
  error.value = ''
  emit('submit', {
    message: message.value.trim(),
    name: name.value.trim(),
    isPublic: isPublic.value
  })
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 16px;
}

.modal-box {
  background: #fffdf0;
  border-radius: 20px;
  padding: 28px 24px 24px;
  width: 100%;
  max-width: 420px;
  position: relative;
  box-shadow: 0 8px 40px rgba(0,0,0,0.2);
  animation: slideUp 0.25s ease;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

.close-btn {
  position: absolute;
  top: 12px; right: 16px;
  background: none; border: none;
  font-size: 22px; color: #999; cursor: pointer;
}
.close-btn:hover { color: #333; }

.modal-title {
  font-size: 20px;
  color: #5c3a00;
  margin: 0 0 20px;
  text-align: center;
}

.field { margin-bottom: 16px; }

.field label {
  display: block;
  font-size: 13px;
  color: #7a5c2a;
  margin-bottom: 6px;
  font-weight: 600;
}

.required { color: #e05a00; }

.field textarea,
.field input[type="text"] {
  width: 100%;
  border: 2px solid #e8d9b0;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 15px;
  background: #fff;
  color: #333;
  font-family: inherit;
  resize: none;
  box-sizing: border-box;
  transition: border-color 0.2s;
}

.field textarea:focus,
.field input[type="text"]:focus {
  outline: none;
  border-color: #f5c518;
}

.char-count {
  display: block;
  text-align: right;
  font-size: 11px;
  color: #bbb;
  margin-top: 4px;
}

.checkbox-field { margin-bottom: 8px; }

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  margin-top: 3px;
  width: 16px; height: 16px;
  accent-color: #f5c518;
  flex-shrink: 0;
}

.checkbox-text {
  font-size: 14px;
  color: #5c3a00;
  line-height: 1.4;
}

.checkbox-text small {
  display: block;
  font-size: 11px;
  color: #999;
  margin-top: 2px;
}

.error-msg {
  color: #e05a00;
  font-size: 13px;
  margin: 4px 0 8px;
  text-align: center;
}

.submit-btn {
  width: 100%;
  background: linear-gradient(135deg, #f5c518, #e8a800);
  color: #5c3a00;
  border: none;
  border-radius: 12px;
  padding: 13px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  margin-top: 8px;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(245,197,24,0.5);
}
.submit-btn:active { transform: translateY(0); }
</style>
