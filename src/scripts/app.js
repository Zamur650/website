const typeText = (element, text) => {
	element.innerHTML = ''

	const letters = text.split('')

	const interval = setInterval(() => {
		element.innerHTML += letters.shift()

		if (element.innerHTML == text) clearInterval(interval)
	}, 100)
}

const textName = document.getElementById('name')
const text = 'Alexiy Rybin'

typeText(textName, text)

//
new QRCode(document.getElementById('qrcode'), document.URL)
