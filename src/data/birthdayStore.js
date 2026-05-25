import { pb } from '../lib/pb.js'
import { REVEAL_TIME } from './birthdayImages.js'

function mapWish(record) {
  return {
    id: record.id,
    message: record.message,
    name: record.name,
    isPublic: record.is_public,
    createdAt: record.created,
  }
}

export async function getWishes() {
  const isRevealed = new Date() >= REVEAL_TIME
  const options = { sort: 'created' }
  if (!isRevealed) options.filter = 'is_public = true'
  const records = await pb.collection('wishes').getFullList(options)
  return records.map(mapWish)
}

export async function addWish({ message, name, isPublic }) {
  const record = await pb.collection('wishes').create({
    message,
    name: name || '匿名朋友',
    is_public: isPublic,
  })
  return mapWish(record)
}
