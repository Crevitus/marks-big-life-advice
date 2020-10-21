﻿window.onload = function () {
	function switchTheme(e) {
		if (e.target.checked) {
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		}
		else {
			document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
		}
	}

	const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

	toggleSwitch.addEventListener('change', switchTheme, false);

	const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

	if (currentTheme) {
		document.documentElement.setAttribute('data-theme', currentTheme);

		if (currentTheme === 'dark') {
			toggleSwitch.checked = true;
		}
	}

    const quotes = [
        '"If you don\'t say it with confidence, you\'ve already failed."',
        '"Things are never as big a deal as you expect them to be."',
        '"It will come when it comes."',
        '"I don\'t care where it came from, I care where it\'s going."',
        '"Never attribute to malice that which can be attributed to stupidity."',
		'"A lunch time whisky is very risky."',
    ];

    const quoteToShow = quotes[Math.floor(Math.random() * quotes.length)];

    const el = document.getElementById('quote');

    el.innerText = quoteToShow;
};