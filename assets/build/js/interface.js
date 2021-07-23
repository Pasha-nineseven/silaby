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
})


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
		<li><a href="goods-settings.html">goods-sett(7)</a></li> \
	</ol> \
</div>'