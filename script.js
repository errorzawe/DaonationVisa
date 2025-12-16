document.addEventListener('DOMContentLoaded', function () {
	const toggle = document.querySelector('.menu-toggle');
	const menu = document.querySelector('.headerMenu');

	if (!menu) return;

	// Existing menu toggle (if present)
	if (toggle) {
		toggle.addEventListener('click', function (e) {
			e.stopPropagation();
			menu.classList.toggle('open');
		});
	}

	toggle.addEventListener('click', function (e) {
		e.stopPropagation();
		menu.classList.toggle('open');
	});

	// Close menu when clicking outside
	document.addEventListener('click', function (e) {
		if (toggle && !menu.contains(e.target) && !toggle.contains(e.target)) {
			menu.classList.remove('open');
		}
	});

	// === New: hide contact text when viewport is reduced by 50px from initial width ===
	const initialWidth = window.innerWidth;
	let reducedClass = 'reduced-50';

	function checkReduced() {
		const current = window.innerWidth;
		if (current <= initialWidth - 50) {
			document.body.classList.add(reducedClass);
		} else {
			document.body.classList.remove(reducedClass);
		}
	}

	// Debounced resize handler
	let timeout;
	window.addEventListener('resize', function () {
		clearTimeout(timeout);
		timeout = setTimeout(checkReduced, 120);
	});

	// Run once on load
	checkReduced();
});
