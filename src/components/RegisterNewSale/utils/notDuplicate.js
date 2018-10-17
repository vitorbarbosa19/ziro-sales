import { get } from 'axios'

const notDuplicate = async (input_id) => {
	const { data: { values: spreadsheet } } = await get(process.env.TRANSACTIONS_SHEET_URL)
	const ids = spreadsheet.map( contents => contents[2]).slice(1)
	return !ids.includes(input_id)
}

export default notDuplicate