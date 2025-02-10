'use strict'
import quotes from './src/quotes.js'
import {
	removeFavoriteCard,
	toggleFavoriteIcon,
	showFavoriteCard,
} from './src/favoritesHandler.js'
import { generateRandomInt } from './src/utils.js'

const quoteElement = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const genrateBtn = document.getElementById('generate-btn')
const makeFavoriteBtn = document.getElementById('add-favorite')
const favoritesContainer = document.getElementById('favorites-container')

let currentQuoteIndex

function generateRandomQuote() {
	const randomIndex = generateRandomInt(quotes.length)
	const { quote, author, isFavorite } = quotes[randomIndex]
	currentQuoteIndex = randomIndex
	quoteElement.textContent = quote
	quoteAuthor.textContent = author
	toggleFavoriteIcon(isFavorite, makeFavoriteBtn)
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
