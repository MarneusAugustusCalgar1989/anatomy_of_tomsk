// ELEMS
const mainContainer = document.querySelector('.anatomy_container');
const imagesWrapper = document.querySelector('.images_wrapper');
const mainBg = document.querySelector('.main_bg');
const secondMain = document.querySelector('.second_bg');
const header1 = document.querySelector('.header_1');
const header2 = document.querySelector('.header_2');
const kuhterin = document.querySelector('.kuhterin');
const ligin = document.querySelector('.ligin');
const mainHouse = document.querySelector('.main_house');
const mhBlueprint = document.querySelector('.mh_blueprint');
const profileLeft = document.querySelector('.profile_left');
const profileRight = document.querySelector('.profile_right');
const profileBottom = document.querySelector('.profile_bottom');
const bottomLine = document.querySelector('.bottom_line');
const mainPodp = document.querySelector('.main_podp');
const topView = document.querySelector('.top_view');
const topViewVinos = document.querySelector('.top_view_vinos');
const demonstration = document.querySelector('.demonstration');
const timeLine = document.querySelector('.timeline');
const leftBottom = document.querySelector('.left_bottom');
const lantern = document.querySelector('.lantern');
const lanterVinos = document.querySelector('.lantern_vinos');

// HOVERS
const mainBuildingHover = document.querySelector('.main_building_hover');
const topViewHover = document.querySelector('.top_view_hover');
const demonsrtHover = document.querySelector('.demonstr_hover');
const bottomLeftHover = document.querySelector('.bottom_left_hover');
const bottomRightHover = document.querySelector('.bottom_right_hover');

// LOGIC

const infoStart = () => {
  let isClicked = false;

  imagesWrapper.onmouseover = () => {
    header1.classList.add('to_screen');
    header2.classList.add('to_screen');
    secondMain.classList.add('saturate');
  };

  imagesWrapper.onmouseleaver = () => {
    console.log('first');
  };

  mainBuildingHover.onmousedown = () => {
    isClicked = true;
  };

  mainBuildingHover.onmouseup = () => {
    isClicked = false;
    mhBlueprint.style.display = 'none';
  };

  mainBuildingHover.onmousemove = e => {
    if (isClicked) {
      e.preventDefault();
      x = (e.clientX * 100) / mainContainer.offsetWidth;
      y = (e.offsetY * 100) / mainBuildingHover.offsetHeight;
      mhBlueprint.style.display = 'flex';
      mhBlueprint.style.clipPath = `ellipse(12% 22% at ${x - 5}% ${y}%)`;
    }
  };

  mainBuildingHover.onmouseover = () => {
    kuhterin.classList.add('to_screen');
    ligin.classList.add('to_screen');
    kuhterin.classList.add('to_screen');
    profileLeft.classList.add('to_screen');
    profileRight.classList.add('to_screen');
    profileBottom.classList.add('to_screen');
    bottomLine.classList.add('to_screen');
    mainHouse.classList.add('saturate');
  };

  topViewHover.onmouseover = () => {
    topView.classList.add('saturate');
    topViewVinos.classList.add('to_screen');
  };

  demonsrtHover.onmouseover = () => {
    timeLine.classList.add('to_screen');
  };

  bottomLeftHover.onmouseover = () => {
    lantern.classList.add('to_screen');
  };

  bottomRightHover.onmouseover = () => {
    if (lantern.classList.value.includes('to_screen')) {
      lanterVinos.classList.add('to_screen');
    }
  };
  mainContainer.onmouseleave = () => {
    mainContainer.querySelectorAll('img').forEach(el => {
      if (el.classList.value.includes('to_screen')) {
        el.classList.remove('to_screen');
      }
      if (el.classList.value.includes('saturate')) {
        el.classList.remove('saturate');
      }
    });
  };
};

// ONLOADING

const spinner = document.querySelector('.spinner');
imagesWrapper.style.display = 'none';
spinner.style.display = 'block';

let loadState = [];
const imagesInWrapper = mainContainer.querySelectorAll('img');

const checkLoadState = () => {
  if (loadState.length == imagesInWrapper.length) {
    document.querySelector('.spinner_hat').classList.add('spinner_up');
    document.querySelector('.spinner_must').classList.add('spinner_down');
    setTimeout(() => {
      spinner.style.display = 'none';
      imagesWrapper.style.display = 'flex';

      infoStart();
    }, 1000);
  }
};

imagesInWrapper.forEach(el => {
  el.onload = () => {
    loadState.push(el.classList.value);
    checkLoadState();
  };
});

infoStart();
