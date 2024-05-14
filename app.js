
const btnWork = document.querySelector('.work')
const btnLife = document.querySelector('.life')
const randomWork = document.querySelector('.randomwork')
const randomLife = document.querySelector('.randomlife')
const paraWork = document.querySelector('#parawork')
const paraLife = document.querySelector('#paralife')

const work = ["Хекслет", "Codewars", "Почитать книгу", "Повторить пройденное", "Верстка", "Livecoding"]
const life = ["Кожевенничество", "Вязание", "Валяние/Вышивание", "Чтение", "Фото", "Вязание", "Вязание", "Game", "Game", "Game"]

btnWork.addEventListener('click', () => {
  randomWork.style.visibility = `visible`
  paraWork.textContent = random(work)
})

btnLife.addEventListener('click', () => {
  randomLife.style.visibility = `visible`
  paraLife.textContent = random(life)
})

function random(delo) {
  let index = Math.floor(Math.random() * delo.length)
  return delo[index]
}

/* получить событие по клику
определить по какой кнопке был клик
запустить функцию с массивом соответствующим кнопке
выдать результат*/

