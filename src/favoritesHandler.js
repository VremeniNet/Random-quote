function toggleFavoriteIcon(isFavorite, el) {
	el.classList.toggle('fa', isFavorite)
	el.classList.toggle('far', !isFavorite)
}

function showFavoriteBtn(btn) {
	btn.style.display = 'inline-block'
}

function hideFavoriteBtn(btn) {
	btn.style.display = 'none'
}

function removeFavoriteCard(text) {
	const favoriteCards = document.querySelectorAll('.favorite-card')
	favoriteCards.forEach(card => {
		if (card.textContent.includes(text)) {
			card.remove()
		}
	})
}

function showFavoriteCard(text, author, container) {
	const favoriteCard = document.createElement('div')
	favoriteCard.classList.add('favorite-card')
	favoriteCard.innerHTML = `
		<p>${text}</p>
		<p class = 'author'>${author}</p>
		`
	container.appendChild(favoriteCard)
}

export {
	toggleFavoriteIcon,
	showFavoriteCard,
	removeFavoriteCard,
	showFavoriteBtn,
	hideFavoriteBtn,
}
