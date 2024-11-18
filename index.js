const spinner = document.querySelector('.spinner');
const imageWrapper = document.querySelector('.images_wrapper');
imageWrapper.style.display = 'none';
spinner.style.display = 'block';

let loadState = [];
const imagesInWrapper = imageWrapper.querySelectorAll('img');

const checkLoadState = () => {
  if (loadState.length == imagesInWrapper.length) {
    document.querySelector('.spinner_hat').classList.add('spinner_up');
    document.querySelector('.spinner_must').classList.add('spinner_down');
    setTimeout(() => {
      spinner.style.display = 'none';
      imageWrapper.style.display = 'block';
    }, 1000);
  }
};

imagesInWrapper.forEach(el => {
  el.onload = () => {
    loadState.push(el.classList.value);
    checkLoadState();
  };
});
