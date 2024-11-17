const mainContainer = document.querySelector('.anatomy_container')
const imagesWrapper = document.querySelector('.images_wrapper')
const mainBg = document.querySelector('.main_bg')
const normTop = document.querySelector('.norm_top')
const deadTop = document.querySelector('.dead_top')
const mapLegend = document.querySelector('.map_legend')
const igHeader = document.querySelector('.ig_header')
const igHeaderDescr = document.querySelector('.ig_header_descr')
const leftTop = document.querySelector('.left_top')
const left2 = document.querySelector('.left_2')
const left3 = document.querySelector('.left_3')
const left4 = document.querySelector('.left_4')
const left5 = document.querySelector('.left_5')
const left6 = document.querySelector('.left_6')
const left7 = document.querySelector('.left_7')
const right1 = document.querySelector('.right_1')
const right2 = document.querySelector('.right_2')
const right3 = document.querySelector('.right_3')
const right4 = document.querySelector('.right_4')

const mainHover = document.querySelector('.main_hover')

const interElements = document.querySelectorAll('.inter_elems')

const spinner = document.querySelector('.spinner')

const infoStart = () => {
  let clickedCount = 0

  mainHover.onclick = (e) => {
    clickedCount++
    if (clickedCount < 15) {
      x = (e.clientX * 100) / mainContainer.offsetWidth
      y = (e.offsetY * 100) / mainHover.offsetHeight

      let newTop = normTop.cloneNode()
      newTop.style.clipPath = `ellipse(40% 18% at ${x - 5}% ${y}%)`
      imagesWrapper.insertBefore(newTop, mainBg)
      setTimeout(() => {
        newTop.classList.add('to_screen')
      }, 50)
      if (y > 0 && y < 30) {
        leftTop.classList.add('to_screen')
        left2.classList.add('to_screen')
        left3.classList.add('to_screen')
        right1.classList.add('to_screen')
        right2.classList.add('to_screen')
      }
      if (y > 30 && y < 60) {
        left4.classList.add('to_screen')
        left5.classList.add('to_screen')
        right3.classList.add('to_screen')
      }
      if (y > 60 && y < 100) {
        left6.classList.add('to_screen')
        left7.classList.add('to_screen')
        right4.classList.add('to_screen')
      }
    }
  }

  mainHover.onmouseover = (e) => {
    igHeader.classList.add('to_screen')
    igHeaderDescr.classList.add('to_screen')
    mainBg.style.filter = 'saturate(100%)'
  }

  mainHover.onmouseleave = (e) => {
    interElements.forEach((el) => {
      if (el.classList.value.includes('to_screen')) {
        el.classList.remove('to_screen')
      }
    })
  }

  mainContainer.onmouseleave = (e) => {
    mainBg.style.filter = 'saturate(0%)'
    clickedCount = 0
    const normTops = document.querySelectorAll('.norm_top')
    normTops.forEach((el) => {
      el.classList.add('fade_out')
      setTimeout(() => {
        el.classList.remove('fade_out')
        el.remove()
      }, 800)
    })
  }
}
imagesWrapper.style.display = 'none'
spinner.style.display = 'block'

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
