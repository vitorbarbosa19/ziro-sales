export const months = [
	'Janeiro',
	'Fevereiro',
	'Março',
	'Abril',
	'Maio',
	'Junho',
	'Julho',
	'Agosto',
	'Setembro',
	'Outubro',
	'Novembro',
	'Dezembro'
]

export const days = [
	'Do',
	'Se',
	'Te',
	'Qu',
	'Qu',
	'Se',
	'Sa'
]

export const dateFormatter = (date) => {
	const dateStr = date.toString()
	return `${dateStr.substr(8,2)}/${dateStr.substr(4,3)}/${dateStr.substr(11,4)}`
}