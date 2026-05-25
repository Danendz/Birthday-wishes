const KEY = 'birthday_wishes'

export function getWishes() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]')
  } catch {
    return []
  }
}

export function addWish({ message, name, isPublic }) {
  const wishes = getWishes()
  const wish = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    message,
    name: name.trim() || '匿名朋友',
    isPublic,
    createdAt: new Date().toISOString()
  }
  wishes.push(wish)
  localStorage.setItem(KEY, JSON.stringify(wishes))
  return wish
}

export function clearWishes() {
  localStorage.removeItem(KEY)
}
