const anatomyContainer = document.querySelector('.anatomy_container')
const imageWrapper = document.querySelector('.images_wrapper')
const spinner = document.querySelector('.spinner')

const infoStart = () => {
  const mapLayer = document.querySelector('.map_layer')

  const square = document.querySelector('.square')
  const squareWords = document.querySelector('.square_words')
  const outPic = document.querySelector('.out_pic')
  const besedka = document.querySelector('.besedka')
  const church = document.querySelector('.church')

  const mainSquareHover = document.querySelector('.main_square_hover')
  const outPicHover = document.querySelector('.out_pic_hover')
  const besedkaHover = document.querySelector('.besedka_hover')
  const churchHover = document.querySelector('.church_hover')

  anatomyContainer.onmousemove = (e) => {
    if (
      e.target.classList.value.includes('main_square_hover') ||
      e.target.classList.value.includes('besedka_hover') ||
      e.target.classList.value.includes('church_hover') ||
      e.target.classList.value.includes('out_pic_hover')
    ) {
      if (!e.target.classList.value.includes('bg_hovered')) {
        mapLayer.classList.add('bg_hovered')
        square.classList.add('square_activate')
        setTimeout(() => {
          squareWords.classList.add('square_activate')
        }, 200)
      }
    } else {
      mapLayer.classList.remove('bg_hovered')
      squareWords.classList.remove('square_activate')
      setTimeout(() => {
        square.classList.remove('square_activate')
      }, 200)
      if (outPic.classList.value.includes('out_pic_hovered')) {
        outPic.classList.remove('out_pic_hovered')
      }
      if (besedka.classList.value.includes('besedka_hovered')) {
        besedka.classList.remove('besedka_hovered')
      }
      if (church.classList.value.includes('church_hovered')) {
        church.classList.remove('church_hovered')
      }
    }
  }

  outPicHover.onmouseover = () => {
    outPic.classList.add('out_pic_hovered')
  }

  besedkaHover.onmouseover = () => {
    besedka.classList.add('besedka_hovered')
  }

  churchHover.onmouseover = () => {
    church.classList.add('church_hovered')
  }
}

// ONLOADING

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
