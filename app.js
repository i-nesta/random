const work = ["Хекслет", "Codewars", "Почитать книгу", "Повторить пройденное", "Верстка", "Livecoding"]
const life = ["Кожевенничество", "Вязание", "Валяние/Вышивание", "Чтение", "Фото", "Вязание", "Вязание"]

function random(delo) {
  let index = Math.floor(Math.random() * delo.length)
  return delo[index]
}
console.log(random(life))