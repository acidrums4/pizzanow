document.addEventListener('DOMContentLoaded', () => {
	const loader = document.getElementById('loader').querySelector('animate')
	loader.addEventListener('endEvent', () => {
		document.documentElement.dataset.state = 'loaded'
		window.scrollTo(0, 0)
	}, false)
})
