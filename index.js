const mainContainer = document.querySelector('.anatomy_container')
const imagesWrapper = document.querySelector('.images_wrapper')
const mainBg = document.querySelector('.main_bg')
const goldTriangle = document.querySelector('.gold_triangle')
const headerText = document.querySelector('.header_text')
const topPhoto = document.querySelector('.top_photo')
const topRightMap = document.querySelector('.top_right_map')
const rightMap = document.querySelector('.right_map')
const rightTop = document.querySelector('.right_top')
const rightCenter = document.querySelector('.right_centre')
const soldierSide = document.querySelector('.soldier_side')
const bottom = document.querySelector('.bottom')
const leftBottom = document.querySelector('.left_bottom')
const leftTop = document.querySelector('.left_top')
const mainMap = document.querySelector('.main_map')
const mainLegend = document.querySelector('.map_legend')

const interactiveElements = [
  mainLegend,
  leftTop,
  leftBottom,
  bottom,
  rightTop,
  rightCenter,
  soldierSide,
]

// hovers

const leftSideHover = document.querySelector('.left_side_hover')
const rightSideHover = document.querySelector('.right_side_hover')
const allSideHover = document.querySelector('.all_side_hover')

const spinner = document.querySelector('.spinner')

const infoStart = () => {
  mainContainer.onmouseover = () => {
    goldTriangle.classList.add('to_screen')
    headerText.classList.add('to_screen')
    mainBg.style.filter = 'saturate(100%)'
    topPhoto.classList.add('to_screen')
    topRightMap.classList.add('to_screen')
  }

  leftSideHover.onmouseover = () => {
    if (!mainLegend.classList.value.includes('to_screen')) {
      mainLegend.classList.add('to_screen')
      mainMap.style.filter = 'saturate(100%)'
    }

    mainLegend.classList.add('to_screen')

    leftTop.classList.add('to_screen')
    setTimeout(() => {
      leftBottom.classList.add('to_screen')
    }, 200)
    setTimeout(() => {
      bottom.classList.add('to_screen')
    }, 400)
  }

  rightSideHover.onmouseover = () => {
    if (!mainLegend.classList.value.includes('to_screen')) {
      mainLegend.classList.add('to_screen')
      mainMap.style.filter = 'saturate(100%)'
    }

    rightTop.classList.add('to_screen')
    setTimeout(() => {
      rightCenter.classList.add('to_screen')
    }, 200)
    setTimeout(() => {
      soldierSide.classList.add('to_screen')
    }, 400)
  }

  document.onmousemove = (e) => {
    if (
      !e.target.classList.value.includes('left_side_hover') &&
      !e.target.classList.value.includes('right_side_hover')
    ) {
      interactiveElements.forEach((el) => {
        if (el.classList.value.includes('to_screen')) {
          el.classList.remove('to_screen')
        }
      })
      mainMap.style.filter = 'saturate(0%)'
    }
  }
}
// ONLOADING

spinner.style.display = 'block'
imagesWrapper.style.display = 'none'
let loadState = []
const imagesInWrapper = mainContainer.querySelectorAll('img')

const checkLoadState = () => {
  if (loadState.length == imagesInWrapper.length) {
    document.querySelector('.spinner_hat').classList.add('spinner_up')
    document.querySelector('.spinner_must').classList.add('spinner_down')
    setTimeout(() => {
      spinner.style.display = 'none'
      imagesWrapper.style.display = 'flex'

      infoStart()
    }, 1000)
  }
}

imagesInWrapper.forEach((el) => {
  el.onload = () => {
    loadState.push(el.classList.value)
    checkLoadState()
  }
})
