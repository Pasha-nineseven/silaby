const button = document.querySelector('.sidebar-toggle');
button.addEventListener('click', e => {
  	document.querySelector('.sidebar').classList.toggle('collapsed')
})

//TABLE HIGHTLIGHT
const table = document.querySelector('.table-users');
table.addEventListener('click', function(e) {
	var e = e || event,
	el = e.srcElement || e.target;
	if (el.tagName == 'INPUT') {
		el.parentNode.parentNode.className = el.checked ? 'active' : '';
	}
})