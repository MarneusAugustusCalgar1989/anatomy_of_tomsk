const imageWrapper = document.querySelector('.images_wrapper')
const nalichnik = document.querySelector('.nal_nalichnik')
const nalBG = document.querySelector('.nal_bg')
const rightBubbles = document.querySelector('.nal_right_bubbles')
const topBubbles = document.querySelector('.nal_top_bubbles')
const leftBubbles = document.querySelector('.nal_left_bubbles')
const bottomBubbles = document.querySelector('.nal_bottom_bubbles')

const bigHoverBlock = document.querySelector('.big_hover_block')
const leftHoverBlock = document.querySelector('.left_hover_block')
const topHoverBlock = document.querySelector('.top_hover_block')
const rightHoverBlock = document.querySelector('.right_hover_block')
const botttomHoverBlock = document.querySelector('.bottom_hover_block')

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
    console.log(loadState)
  }
})

bigHoverBlock.onmouseover = (e) => {
  nalichnik.classList.add('nalichnik_hovered')
}

nalichnik.onmouseover = (e) => {
  e.target.classList.value.includes('nalichnik_hovered')
    ? e.target.classList.remove('nalichnik_hovered')
    : e.target.classList.add('nalichnik_hovered')
  if (leftBubbles.classList.value.includes('left_hovered')) {
    leftBubbles.classList.remove('left_hovered')
  }
  if (topBubbles.classList.value.includes('top_hovered')) {
    topBubbles.classList.remove('top_hovered')
  }
  if (rightBubbles.classList.value.includes('right_hovered')) {
    rightBubbles.classList.remove('right_hovered')
  }
  if (bottomBubbles.classList.value.includes('bottom_hovered')) {
    bottomBubbles.classList.remove('bottom_hovered')
  }
}

leftHoverBlock.onmouseover = () => {
  leftBubbles.classList.add('left_hovered')
}

topHoverBlock.onmouseover = () => {
  topBubbles.classList.add('top_hovered')
}

rightHoverBlock.onmouseover = () => {
  rightBubbles.classList.add('right_hovered')
}
botttomHoverBlock.onmouseover = () => {
  bottomBubbles.classList.add('bottom_hovered')
}
