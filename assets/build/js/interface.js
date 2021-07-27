document.addEventListener('DOMContentLoaded', () =>{

	const button = document.querySelector('.sidebar-toggle');
	if(!!button){
		button.addEventListener('click', e => {
			document.querySelector('.sidebar').classList.toggle('collapsed')
		})
	}
	

	//TABLE HIGHTLIGHT
	const table = document.querySelector('.table-users');
	if(!!table){
		table.addEventListener('click', function(e) {
			var e = e || event,
			el = e.srcElement || e.target;
			if (el.tagName == 'INPUT') {
				el.parentNode.parentNode.className = el.checked ? 'active' : '';
			}
		})
	}


	//FILTER-TOGGLE
	let el = document.querySelector('.js-toggle');
	el.addEventListener('click', function (e) {
		e.preventDefault();

		el.classList.toggle('active');
	});
	document.addEventListener('click', function (event) {
		if (!event.target.classList.contains('js-toggle')) return;
		event.preventDefault();
		var content = document.querySelector(event.target.hash);
		if (!content) return;
		toggle(content);
	}, false);

})

var show = function (elem) {
	elem.style.display = 'block';
};
var hide = function (elem) {
	elem.style.display = 'none';
};
var toggle = function (elem) {
	if (window.getComputedStyle(elem).display === 'block') {
		hide(elem);
		return;
	}
	show(elem);
};



// links pages
const body = document.querySelector('body');
body.innerHTML +=
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 150px;"> \
	<style> \
		#pages { padding: 0 10px 0 35px; font-size: 14px;margin: 28px 0 10px 0px } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="authoriz.html">authoriz(1)</a></li> \
		<li><a href="users.html">users(17)</a></li> \
		<li><a href="control.html">control(18)</a></li> \
		<li><a href="role.html">role(19)</a></li> \
		<li><a href="goods.html">goods(7)</a></li> \
		<li><a href="goods-settings.html">goods-sett(9)</a></li> \
		<li><a href="directory.html">directory(11)</a></li> \
		<li><a href="tag-settings.html">tag-settings(16)</a></li> \
		<li><a href="preset.html">preset(20)</a></li> \
		<li><a href="import.html">import(21)</a></li> \
	</ol> \
</div>'