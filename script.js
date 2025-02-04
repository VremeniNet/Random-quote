'use strict'

const quotes = [
	'The only way to do great work is to love what you do. - Steve Jobs',
	'The only way to do great work is to love what you do. - Steve Jobs',
	'The only way to do great work is to love what you do. - Steve Jobs',
]

const quoteElement = document.getElementById('quote')
const genrateBtn = document.getElementById('generate-btn')

function generateRandomQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length)
	const randomQuote = quotes[randomIndex]
	quoteElement.textContent = randomQuote
}

genrateBtn.addEventListener('click', generateRandomQuote)
