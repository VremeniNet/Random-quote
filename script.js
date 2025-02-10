'use strict'
import quotes from './quotes.js'

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
	if (randomQuote.isFavorite) {
		makeFavoriteBtn.textContent = 'Remove from favorities'
	} else {
		makeFavoriteBtn.textContent = 'Make Favorite'
	}
	makeFavoriteBtn.style.display = 'inline-block'
}

function makeFavorite() {
	const currentQuote = quotes[currentQuoteIndex]
	currentQuote.isFavorite = !currentQuote.isFavorite
	if (makeFavoriteBtn.textContent === 'Make Favorite') {
		makeFavoriteBtn.textContent = 'Remove from favorities'
	} else {
		makeFavoriteBtn.textContent = 'Make Favorite'
	}
	if (currentQuote.isFavorite) {
		const favoriteCard = document.createElement('div')
		favoriteCard.classList.add('favorite-card')
		favoriteCard.innerHTML = `
		<p>${currentQuote.quote}</p>
		<p class = 'author'>${currentQuote.author}</p>
		`
		favoritesContainer.appendChild(favoriteCard)
	} else {
		const favoriteCards = document.querySelectorAll('.favorite-card')
		favoriteCards.forEach(card => {
			if (card.textContent.includes(currentQuote.quote)) {
				card.remove()
			}
		})
	}
}

genrateBtn.addEventListener('click', generateRandomQuote)
makeFavoriteBtn.addEventListener('click', makeFavorite)

generateRandomQuote()
