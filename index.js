'use strict'
import quotes from './src/quotes.js'
import {
	removeFavoriteCard,
	toggleFavoriteIcon,
	showFavoriteCard,
} from './src/favoritesHandler.js'

const quoteElement = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const genrateBtn = document.getElementById('generate-btn')
const makeFavoriteBtn = document.getElementById('add-favorite')
const favoritesContainer = document.getElementById('favorites-container')

let currentQuoteIndex

function generateRandomQuote() {
	currentQuoteIndex = Math.floor(Math.random() * quotes.length)
	const randomQuote = quotes[currentQuoteIndex]
	quoteElement.textContent = randomQuote.quote
	quoteAuthor.textContent = randomQuote.author
	toggleFavoriteIcon(randomQuote.isFavorite, makeFavoriteBtn)
	makeFavoriteBtn.style.display = 'inline-block'
}

function makeFavorite() {
	const currentQuote = quotes[currentQuoteIndex]
	currentQuote.isFavorite = !currentQuote.isFavorite
	toggleFavoriteIcon(currentQuote.isFavorite, makeFavoriteBtn)

	if (currentQuote.isFavorite) {
		showFavoriteCard(
			currentQuote.quote,
			currentQuote.author,
			favoritesContainer
		)
	} else {
		removeFavoriteCard(currentQuote.quote)
	}
}

genrateBtn.addEventListener('click', generateRandomQuote)
makeFavoriteBtn.addEventListener('click', makeFavorite)

generateRandomQuote()
