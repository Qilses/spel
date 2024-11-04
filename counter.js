  import './style.css'

const app = document.querySelector('#app')

const heading = document.createElement("h1")
heading.textContent = "Japp idi dapp"

let count = 0
heading.addEventListener('click', (e) =>{
  count ++
  console.log("click click", count)
})

//diddy did this
app.appendChild(heading)

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}