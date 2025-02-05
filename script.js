'use strict'
import quotes from './quotes.js'

const quoteElement = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const genrateBtn = document.getElementById('generate-btn')

function generateRandomQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length)
	const randomQuote = quotes[randomIndex]
	quoteElement.textContent = randomQuote.quote
	quoteAuthor.textContent = randomQuote.author
}

genrateBtn.addEventListener('click', generateRandomQuote)
