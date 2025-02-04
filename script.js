'use strict'

const quotes = [
	{
		quote: 'The only way to do great work is to love what you do.',
		author: 'Steve Jobs',
	},
	{
		quote:
			'Success is not the key to happiness. Happiness is the key to success.',
		author: 'Albert Schweitzer',
	},
	{
		quote: 'Don’t watch the clock; do what it does. Keep going.',
		author: 'Sam Levenson',
	},
	{
		quote: 'You miss 100% of the shots you don’t take.',
		author: 'Wayne Gretzky',
	},
	{
		quote: 'Believe you can and you’re halfway there.',
		author: 'Theodore Roosevelt',
	},
	{
		quote:
			'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.',
		author: 'Ralph Waldo Emerson',
	},
	{
		quote: 'Strive not to be a success, but rather to be of value.',
		author: 'Albert Einstein',
	},
]

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
