import axios from 'axios'

const sendToBackend = (...parameters) => {
	return new Promise( async (resolve, reject) => {
		const [ boleto, lojista, fornecedor, pagamento, valor, venda,
			comissao, assessor, vencimento, tipo ] = parameters
		const address = `https://ziro-sales-backend.herokuapp.com/`
		const url = `${address}?boleto=${boleto}&lojista=${lojista}&fornecedor=${fornecedor}
			&pagamento=${pagamento}&valor=${valor}&venda=${venda}&comissao=${comissao}&assessor=${assessor}
			&vencimento=${vencimento}&tipo=${tipo}`
		try {
			const response = await axios.get(url)
			if (response === 'SUCCESS')
				resolve(response)
			reject(response)
		} catch (error) {
			reject(error)
		}
	})
}

export default sendToBackend