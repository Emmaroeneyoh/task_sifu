const formatDate = (date: Date | string) => {
	date = new Date(date);
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

	return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

export default formatDate