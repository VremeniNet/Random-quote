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

function removeFavoriteCard(id) {
	const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`)
	if (card) {
		card.remove()
	}
}

function showFavoriteCard(id, text, author, container) {
	const favoriteCard = document.createElement('div')
	favoriteCard.classList.add('favorite-card')
	favoriteCard.dataset.quoteId = id
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
