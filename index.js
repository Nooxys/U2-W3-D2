const inputArea = document.getElementById('name')
const saveButton = document.getElementsByClassName('btn-dark')[0]
const resetButton = document.getElementsByClassName('btn-light')[0]
const counter = document.getElementById('counter')

const clearInput = () => {
  inputArea.value = ''
}

saveButton.addEventListener('click', function () {
  const content = inputArea.value
  localStorage.setItem('name-memory', content)
})

resetButton.addEventListener('click', function () {
  inputArea.value = ''
  localStorage.removeItem('name-memory')
})

if (inputArea) {
  const oldLabel = localStorage.getItem('name-memory')
  inputArea.value = oldLabel
}

console.log('---------------------------')

let seconds = sessionStorage.getItem('timer')

const plusSeconds = () => {
  seconds++
  counter.innerText = seconds
  sessionStorage.setItem('timer', seconds)
}

setInterval(plusSeconds, 1000)
