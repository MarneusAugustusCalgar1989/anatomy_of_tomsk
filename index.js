const imageWrapper = document.querySelector('.images_wrapper')

const bigHoverBlock = document.querySelector('.big_hover_block')
const lakeHoverBlock = document.querySelector('.lake_hover_block')
const rightHoverBlock = document.querySelector('.right_hover_block')
const topHoverBlock = document.querySelector('.top_hover_block')
const botttomHoverBlock = document.querySelector('.bottom_hover_block')
const ultraBottomHoverBlock = document.querySelector(
  '.ultra_bottom_hover_block'
)

const tramvayLayer = document.querySelector('.tramvay')
const topBubbles = document.querySelector('.top_bubbles')
const bottomBubbles = document.querySelector('.bottom_bubbles')
const krest = document.querySelector('.krest')

const bgImage = document.querySelector('.bg_layer')
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

bigHoverBlock.onmouseover = (e) => {
  tramvayLayer.classList.add('lake_hovered')
}

tramvayLayer.onmouseover = (e) => {
  e.target.classList.value.includes('lake_hovered')
    ? e.target.classList.remove('lake_hovered')
    : e.target.classList.add('lake_hovered')
  if (krest.classList.value.includes('krest_hovered')) {
    krest.classList.remove('krest_hovered')
  }
  if (topBubbles.classList.value.includes('top_bubbles_hovered')) {
    topBubbles.classList.remove('top_bubbles_hovered')
  }
  if (bottomBubbles.classList.value.includes('bottom_bubbles_hovered')) {
    bottomBubbles.classList.remove('bottom_bubbles_hovered')
  }
}

lakeHoverBlock.onmouseover = () => {
  krest.classList.add('krest_hovered')
}

topHoverBlock.onmouseover = () => {
  topBubbles.classList.add('top_bubbles_hovered')
}

rightHoverBlock.onmouseover = () => {
  bottomBubbles.classList.add('bottom_bubbles_hovered')
}
botttomHoverBlock.onmouseover = () => {
  bottomBubbles.classList.add('bottom_bubbles_hovered')
}
ultraBottomHoverBlock.onmouseover = () => {
  bottomBubbles.classList.add('bottom_bubbles_hovered')
}
