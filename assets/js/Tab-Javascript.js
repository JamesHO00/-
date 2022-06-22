const tabBox = document.getElementById('tab-box');
const tabBoxTab = tabBox.querySelectorAll('li');
const tabBoxTables = tabBox.querySelectorAll('table');

let tabFunction = function (tabNumber) {
  tabBoxTables.forEach(function (element, index) {
    element.style.display = 'none';
    tabBoxTab[index].className = '';
  });
  tabBoxTables[tabNumber].style.display = '';
  tabBoxTab[tabNumber].className = 'active';
  if (tabNumber == 0) {
    tabBox.style.backgroundColor = '#8FC7F9';
  } else if (tabNumber == 1) {
    tabBox.style.backgroundColor = '#E9EDC9';
  } else {
    tabBox.style.backgroundColor = '#FFD15B';
  }
};

tabBoxTab.forEach(function (element, index) {
  element.onclick = function () {
    tabFunction(index);
  };
});

tabFunction(0);
