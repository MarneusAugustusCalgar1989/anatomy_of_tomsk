const anatomyContainer = document.querySelector('.anatomy_container')
const imageWrapper = document.querySelector('.images_wrapper')
const spinner = document.querySelector('.spinner')

const infoStart = () => {
  const mapHover = document.querySelector('.maphover')
  const diaramaHover = document.querySelector('.diaramahover')

  const mainBG = document.querySelector('.main_bg')
  const infoLayer = document.querySelector('.info_layer')
  const batenkovFontain = document.querySelector('.batenkov_fontain')
  const chasha = document.querySelector('.chasha')
  const citiOazisText = document.querySelector('.city_oazis_text')
  const diagrama = document.querySelector('.diagramma')
  const forsunki = document.querySelector('.forsunki')
  const grafikaBottom = document.querySelector('.grafika_bottom')
  const kakUstrouenFontan = document.querySelector('.kak_ustroen_fontan')

  const nasadkiBubbleText = document.querySelector('.nasadki_bubble_text')
  const podsvetka = document.querySelector('.podsvetka')
  const conserva = document.querySelector('.conserva')

  const lostFontain = document.querySelector('.lost_fontain')
  const mostBeautiful = document.querySelector('.most_beautiful')
  const mostBeautifulText = document.querySelector('.most_beautiful_text')

  mapHover.onmouseover = (e) => {
    mainBG.classList.add('diagramma_active')
    infoLayer.classList.add('active')
    batenkovFontain.classList.add('active')
    lostFontain.classList.add('active')
    mostBeautiful.classList.add('active')
    mostBeautifulText.classList.add('active')
  }
  mapHover.onmouseleave = (e) => {
    mainBG.classList.remove('diagramma_active')

    infoLayer.classList.remove('active')
    batenkovFontain.classList.remove('active')
    lostFontain.classList.remove('active')
    mostBeautiful.classList.remove('active')
    mostBeautifulText.classList.remove('active')
  }

  diaramaHover.onmousemove = (e) => {
    diagrama.classList.add('diagramma_active')
    kakUstrouenFontan.classList.add('active')

    chasha.classList.add('active')
    forsunki.classList.add('active')
    grafikaBottom.classList.add('active')
    nasadkiBubbleText.classList.add('active')
    podsvetka.classList.add('active')
    conserva.classList.add('active')
  }
  diaramaHover.onmouseleave = (e) => {
    diagrama.classList.remove('diagramma_active')
    kakUstrouenFontan.classList.remove('active')

    chasha.classList.remove('active')
    forsunki.classList.remove('active')
    grafikaBottom.classList.remove('active')
    nasadkiBubbleText.classList.remove('active')
    podsvetka.classList.remove('active')
    conserva.classList.remove('active')
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
