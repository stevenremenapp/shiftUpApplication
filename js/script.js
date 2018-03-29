//to activate the smooth scroll script

var scroll = new SmoothScroll('a[href*="#"]', {
	// Selectors
	header: 'nav', // Selector for fixed headers (must be a valid CSS selector)
	speed: 1000, // Integer. How fast to complete the scroll in milliseconds
	offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
});

//to active the scroll spy script found here: https://github.com/denislins/scrollmenu

new ScrollMenu('nav a');
