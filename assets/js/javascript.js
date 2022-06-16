const navbarLink = document.getElementById('navbar-link');
const navbarClick = navbarLink.getElementsByClassName('navbar__click');
const subNavbar = navbarLink.querySelectorAll('ul');

let navbarOnClick = () => {
  Array.from(navbarClick).forEach(function (element, index) {
    element.addEventListener('click', function () {
      subNavbar[index].classList.toggle('active');
    });
  });
};
navbarOnClick();
