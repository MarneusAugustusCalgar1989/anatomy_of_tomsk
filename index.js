const mainContainer = document.querySelector('.anatomy_container')
const beginContainer = document.querySelector('.begin')
const endContainer = document.querySelector('.end')
const infoAncor = document.querySelector('.info_ancor')
const endInfoAncor = document.querySelector('.end_info_ancor')
const beginHover = document.querySelector('.begin_hover')
const beginAsset = document.querySelector('.asset')

const endHover = document.querySelector('.end_hover')
const endAsset_1 = document.querySelector('.end_asset_1')
const endAsset_2 = document.querySelector('.end_asset_2')
const endAsset_3 = document.querySelector('.end_asset_3')

const spinner = document.querySelector('.spinner')

const infoStart = () => {
  beginContainer.onmouseleave = () => {
    if (beginAsset.classList.value.includes('fade_in')) {
      beginAsset.classList.remove('fade_in')
    }
    infoAncor.style.filter = 'saturate(0%)'
  }

  endContainer.onmouseleave = () => {
    endInfoAncor.style.filter = 'saturate(0%)'
    imagesArr = endContainer.querySelectorAll('img')
    imagesArr.forEach((el) => {
      if (el.classList.value.includes('fade_in')) {
        el.classList.remove('fade_in')
      }
    })
  }

  beginHover.onmouseover = () => {
    beginAsset.classList.add('fade_in')
    infoAncor.style.filter = 'saturate(100%)'
  }

  endHover.onmouseover = () => {
    endAsset_1.classList.add('fade_in')
    endInfoAncor.style.filter = 'saturate(100%)'
  }

  endAsset_1.onmouseover = () => {
    endAsset_2.classList.add('fade_in')
    setTimeout(() => {
      endAsset_3.classList.add('fade_in')
    }, 300)
  }
}

// ONLOADING

beginContainer.style.display = 'none'
endContainer.style.display = 'none'

spinner.style.display = 'block'

let loadState = []
const imagesInWrapper = mainContainer.querySelectorAll('img')

const checkLoadState = () => {
  if (loadState.length == imagesInWrapper.length) {
    document.querySelector('.spinner_hat').classList.add('spinner_up')
    document.querySelector('.spinner_must').classList.add('spinner_down')
    setTimeout(() => {
      spinner.style.display = 'none'
      beginContainer.style.display = 'flex'
      endContainer.style.display = 'flex'

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
