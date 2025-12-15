document.addEventListener('DOMContentLoaded', function () {
	const toggle = document.querySelector('.menu-toggle');
	const menu = document.querySelector('.headerMenu');

	if (!toggle || !menu) return;

	toggle.addEventListener('click', function (e) {
		e.stopPropagation();
		menu.classList.toggle('open');
	});

	// Close menu when clicking outside
	document.addEventListener('click', function (e) {
		if (!menu.contains(e.target) && !toggle.contains(e.target)) {
			menu.classList.remove('open');
		}
	});
});
