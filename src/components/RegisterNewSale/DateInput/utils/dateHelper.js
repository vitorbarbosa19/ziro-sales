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
	let dateString = date.toString()
	dateString = dateString.replace('Feb','Fev')
	dateString = dateString.replace('Apr','Abr')
	dateString = dateString.replace('May','Mai')
	dateString = dateString.replace('Aug','Ago')
	dateString = dateString.replace('Sep','Set')
	dateString = dateString.replace('Oct','Out')
	dateString = dateString.replace('Dec','Dez')
	return `${dateString.substr(8,2)}/${dateString.substr(4,3)}/${dateString.substr(11,4)}`
}