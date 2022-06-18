const title = document.querySelectorAll('.info__title');
const showContent = document.querySelectorAll('.info__container');
const button = document.querySelectorAll('.info__title__button');

let clickFunction = () => {
  title.forEach(function (element, index) {
    element.addEventListener('click', function () {
      showContent[index].classList.toggle('active');
      button[index].classList.toggle('active');
    });
  });
};
clickFunction();
