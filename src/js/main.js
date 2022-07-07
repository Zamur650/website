const typeText = (element, text) => {
	element.innerHTML = ''
	let i = text.length

	const letters = text.split('')

	const interval = setInterval(() => {
		element.innerHTML += letters.shift()

		if (element.innerHTML.length == i) {
			element.classList.remove('blinking')
			
			clearInterval(interval)
		}
	}, 100)
}

const textName = [
	{
		element: document.getElementById('name'),
		text: document.getElementById('name').innerText
	},
	{
		element: document.getElementById('nickName'),
		text: document.getElementById('nickName').innerText
	}
]

textName.forEach(text => {
	typeText(text.element, text.text)
})
