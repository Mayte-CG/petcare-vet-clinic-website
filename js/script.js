const navToggle = document.querySelector(".nav-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");
const navigationLinks = primaryNavigation?.querySelectorAll("a");

if (navToggle && primaryNavigation) {
	const setMenuOpen = (isOpen) => {
		navToggle.setAttribute("aria-expanded", String(isOpen));
		navToggle.setAttribute(
			"aria-label",
			isOpen ? "Close navigation menu" : "Open navigation menu",
		);
		primaryNavigation.classList.toggle("is-open", isOpen);
	};

	navToggle.addEventListener("click", () => {
		const isOpen = navToggle.getAttribute("aria-expanded") === "true";
		setMenuOpen(!isOpen);
	});

	navigationLinks?.forEach((link) => {
		link.addEventListener("click", () => setMenuOpen(false));
	});

	document.addEventListener("keydown", (event) => {
		if (
			event.key === "Escape" &&
			navToggle.getAttribute("aria-expanded") === "true"
		) {
			setMenuOpen(false);
			navToggle.focus();
		}
	});

	window.matchMedia("(min-width: 701px)").addEventListener("change", () => {
		setMenuOpen(false);
	});
}
