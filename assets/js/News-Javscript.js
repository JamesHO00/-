const title = document.querySelectorAll('.info__title');
const showContent = document.querySelectorAll('.info__container');

let clickFunction = () => {
  title.forEach(function (element, index) {
    element.addEventListener('click', function () {
      showContent[index].classList.toggle('active');
    });
  });
};
clickFunction();
