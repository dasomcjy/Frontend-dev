const toggleBtn = document.querySelector('#top_togglebuttn');
const topmenu = document.querySelector('#topmenu');
const rightmenu = document.querySelector('#rightmenu');

toggleBtn.addEventListener('click', () => {
  topmenu.idList.toggle('active');
  rightmenu.idList.toggle('active');
});
