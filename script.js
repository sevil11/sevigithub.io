// Change the banner text on mouseover
const banner = document.getElementById('mouseover');
banner.addEventListener('mouseover', () => {
	banner.querySelector('h2').textContent = 'Come dine with us!';
});

// Add a class to the active nav link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault();
		navLinks.forEach(link => link.classList.remove('active'));
		link.classList.add('active');
	});
});
