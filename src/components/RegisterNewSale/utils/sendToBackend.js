import axios from 'axios'
import dateFormatter from './dateFormatter'

const sendToBackend = (...parameters) => {
	return new Promise( async (resolve, reject) => {
		const [ romaneio, boleto, fornecedor, lojista, pagamento, valor, venda,
			comissao, assessor, vencimento, tipo ] = parameters
		const address = `https://ziro-sales-backend.herokuapp.com/`
		const url = `${address}?romaneio=${romaneio}&boleto=${boleto}&lojista=${lojista}&fornecedor=${fornecedor}&pagamento=${pagamento}
			&valor=${valor}&venda=${dateFormatter(venda)}&comissao=${parseFloat(comissao / 100)}
			&assessor=${assessor}&vencimento=${dateFormatter(vencimento)}&tipo=${tipo}`
		try {
			const response = await axios.get(url)
			if (response.data === 'INVALID_REQUEST')
				reject(response.data)
			resolve(response.data)
		} catch (error) {
			reject(error)
		}
	})
}

export default sendToBackend