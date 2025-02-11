'use strict'
import quotes from './src/quotes.js'
import {
	removeFavoriteCard,
	toggleFavoriteIcon,
	showFavoriteCard,
	showFavoriteBtn,
	hideFavoriteBtn,
} from './src/favoritesHandler.js'
import { generateRandomInt } from './src/utils.js'

const genrateBtn = document.getElementById('generate-btn')
const makeFavoriteBtn = document.getElementById('add-favorite')
const favoritesContainer = document.getElementById('favorites-container')

let currentQuoteIndex

hideFavoriteBtn(makeFavoriteBtn)

function displayQuote(quote) {
	const { text, author, isFavorite } = quote
	const quoteElement = document.getElementById('quote')
	const quoteAuthor = document.getElementById('author')
	quoteElement.textContent = text
	quoteAuthor.textContent = author
	showFavoriteBtn(makeFavoriteBtn)
	toggleFavoriteIcon(isFavorite, makeFavoriteBtn)
}

function choseRandomQuote(quotes) {
	const randomIndex = generateRandomInt(quotes.length)
	currentQuoteIndex = randomIndex
	return quotes[randomIndex]
}

function generateAndDisplayRandomQuote() {
	const randomQuote = choseRandomQuote(quotes)
	displayQuote(randomQuote)
}

function makeFavorite() {
	const currentQuote = quotes[currentQuoteIndex]
	currentQuote.isFavorite = !currentQuote.isFavorite
	toggleFavoriteIcon(currentQuote.isFavorite, makeFavoriteBtn)

	if (currentQuote.isFavorite) {
		showFavoriteCard(
			currentQuote.id,
			currentQuote.text,
			currentQuote.author,
			favoritesContainer
		)
	} else {
		removeFavoriteCard(currentQuote.id)
	}
}

genrateBtn.addEventListener('click', generateAndDisplayRandomQuote)
makeFavoriteBtn.addEventListener('click', makeFavorite)
