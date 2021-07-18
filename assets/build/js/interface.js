const button = document.querySelector('.sidebar-toggle');
button.addEventListener('click', e => {
  	document.querySelector('.sidebar').classList.toggle('collapsed')
})