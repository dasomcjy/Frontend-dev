const togglebtn = document.querySelector('#top_togglebuttn');
const menu = document.querySelector('#topmenu');
const rightmenu = document.querySelector('#rightmenu');

togglebtn.addEventListener('click' , () => {
  menu.classList.toggle('active');
  rightmenu.classList.toggle('active');
});