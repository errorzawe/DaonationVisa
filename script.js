document.addEventListener('DOMContentLoaded', function () {
	const toggle = document.querySelector('.menu-toggle');
	const menu = document.querySelector('.headerMenu');

	if (!menu) return;

	// Menu toggle (single, guarded handler)
	if (toggle) {
		toggle.setAttribute('aria-expanded', 'false');
		toggle.addEventListener('click', function (e) {
			e.stopPropagation();
			const isOpen = menu.classList.toggle('open');
			toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
			menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
		});
	}

	// Close menu when clicking outside
	document.addEventListener('click', function (e) {
		if (toggle && !menu.contains(e.target) && !toggle.contains(e.target)) {
			menu.classList.remove('open');
			toggle.setAttribute('aria-expanded', 'false');
			menu.setAttribute('aria-hidden', 'true');
		}
	});

	// Removed premature-hide behavior: contact texts/icons remain visible until CSS breakpoints

	// Search button behavior: focus/expand input instead of submitting when collapsed
	const searchForm = document.querySelector('.form-inline');
	const searchInput = searchForm ? searchForm.querySelector('input[type="search"]') : null;
	const searchButton = searchForm ? searchForm.querySelector('button[type="submit"]') : null;

	if (searchButton && searchInput) {
		searchButton.addEventListener('click', function (ev) {
			// if input is not visible/expanded yet, prevent submit and focus to expand
			if (searchInput.offsetWidth < 40) {
				ev.preventDefault();
				searchInput.classList.add('expanded');
				searchInput.focus();
				return;
			}
			// otherwise allow normal submit
		});

		// collapse input when it loses focus and is empty
		searchInput.addEventListener('blur', function () {
			setTimeout(function () {
				if (!searchInput.value) searchInput.classList.remove('expanded');
			}, 150);
		});
	}
});
