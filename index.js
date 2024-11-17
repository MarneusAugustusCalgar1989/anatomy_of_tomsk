const imageWrapper = document.querySelector('.images_wrapper')
const bgImage = document.querySelector('.bg_layer')
const tram = document.querySelector('.tramvay')
const leftBubbles = document.querySelector('.left_bubbles')
const rightBubbles = document.querySelector('.right_bubbles')
const hoverWrapper = document.querySelector('.hover_wrapper')
const spinner = document.querySelector('.spinner')

imageWrapper.style.display = 'none'
spinner.style.display = 'block'

let loadState = []
const imagesInWrapper = imageWrapper.querySelectorAll('img')

const checkLoadState = () => {
  if (loadState.length == imagesInWrapper.length) {
    document.querySelector('.spinner_hat').classList.add('spinner_up')
    document.querySelector('.spinner_must').classList.add('spinner_down')
    setTimeout(() => {
      spinner.style.display = 'none'
      imageWrapper.style.display = 'block'
    }, 1000)
  }
}

imagesInWrapper.forEach((el) => {
  el.onload = () => {
    loadState.push(el.classList.value)
    checkLoadState()
  }
})

hoverWrapper.onmouseover = () => {
  leftBubbles.classList.add('hovered')
  rightBubbles.classList.add('hovered')
  tram.classList.add('tram_hovered')
}

hoverWrapper.onmouseleave = () => {
  leftBubbles.classList.remove('hovered')
  rightBubbles.classList.remove('hovered')
  tram.classList.remove('tram_hovered')
}
