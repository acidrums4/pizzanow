document.addEventListener('DOMContentLoaded', () => {
	const loader = document.getElementById('loader').querySelector('animate')
	const slides = document.querySelector('section ul')
	const slideDelay = 3000
	const slideCount = slides.childElementCount
	const prevSlideBtn = slides.previousElementSibling
	const nextSlideBtn = slides.nextElementSibling
	let currentSlide = 0
	let autoChange

	const changeSlide = (goForward = true) => {
		delete slides.children[currentSlide].dataset.currentSlide
		if (goForward) {
			currentSlide = currentSlide + 1 < slideCount ? currentSlide + 1 : 0
		} else {
			currentSlide = currentSlide > 0 ? currentSlide - 1 : slideCount - 1
		}
		console.log(currentSlide)
		slides.children[currentSlide].dataset.currentSlide = true
	}

	const navigateSlides = (goForward) => {
		clearInterval(autoChange)
		changeSlide(goForward)
	}

	slides.addEventListener('mouseover', () => {
		clearInterval(autoChange)
	}, false)

	slides.addEventListener('mouseleave', () => {
		autoChange = setInterval(changeSlide, slideDelay)
	}, false)

	prevSlideBtn.addEventListener('click', () => {
		navigateSlides(false)
	}, false)

	nextSlideBtn.addEventListener('click', () => {
		navigateSlides(true)
	}, false)

	loader.addEventListener('endEvent', () => {
		document.documentElement.dataset.state = 'loaded'
		window.scrollTo(0, 0)
		autoChange = setInterval(changeSlide, slideDelay)
		slides.children[currentSlide].dataset.currentSlide = true
	}, false)
})
