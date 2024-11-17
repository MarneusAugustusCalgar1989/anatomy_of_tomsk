// main elems
const imagesWrapper = document.querySelector('.images_wrapper')
const mainBg = document.querySelector('.main_bg')
const mainHeader = document.querySelector('.main_header')
const secondHeader = document.querySelector('.second_header')
const rightCalc = document.querySelector('.right_calc')
const mainMap = document.querySelector('.main_map')
const mapDescr = document.querySelector('.map_descr')
const mechNdescr = document.querySelector('.mech_n_descr')
const leftTree = document.querySelector('.left_tree')
const urna = document.querySelector('.urna')
const rulonNwords = document.querySelector('.rulon_n_words')
const thirdHeader = document.querySelector('.third_header')
const batteryNtext = document.querySelector('.battery_n_text')
const playgroundNtext = document.querySelector('.playground_n_text')
const treesNtext = document.querySelector('.trees_n_text')
const lightsNtext = document.querySelector('.lights_n_text')
const mafNurns = document.querySelector('.maf_n_urns')
const bottomPlayground = document.querySelector('.bottom_playgr')

// hovers
const topHover = document.querySelector('.top_hover')
const mapHover = document.querySelector('.map_hover')
const rulonHover = document.querySelector('.rulon_hover')
const bottomHover = document.querySelector('.bottom_hover')

const infoStart = () => {
  imagesWrapper.onmouseleave = () => {
    const assets = document.querySelectorAll('.assets')
    assets.forEach((el) => {
      if (el.classList.value.includes('to_screen')) {
        el.classList.remove('to_screen')
      }
    })
  }

  topHover.onmouseover = () => {
    mainBg.style.filter = 'saturate(100%)'
    mainHeader.classList.add('to_screen')
    secondHeader.classList.add('to_screen')
    rightCalc.classList.add('to_screen')
  }
  mapHover.onmouseover = () => {
    mainMap.style.filter = 'saturate(100%)'
    mapDescr.classList.add('to_screen')
    mechNdescr.classList.add('to_screen')
    leftTree.classList.add('to_screen')
    urna.classList.add('to_screen')
  }

  rulonHover.onmouseover = () => {
    rulonNwords.classList.add('to_screen')
  }

  bottomHover.onmouseover = () => {
    thirdHeader.classList.add('to_screen')
    batteryNtext.classList.add('to_screen')
    playgroundNtext.classList.add('to_screen')
    treesNtext.classList.add('to_screen')
    lightsNtext.classList.add('to_screen')
    mafNurns.classList.add('to_screen')
    bottomPlayground.classList.add('to_screen')
  }
}

const spinner = document.querySelector('.spinner')

imagesWrapper.style.display = 'none'
spinner.style.display = 'block'

let loadState = []
const imagesInWrapper = imagesWrapper.querySelectorAll('img')

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
