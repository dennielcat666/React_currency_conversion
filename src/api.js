const apiCourse = "https://www.cbr-xml-daily.ru/daily_json.js"

function getCourse() {
	return fetch(apiCourse)
			.then(res => res.json())
			.catch(error => console.error(error))
}

export default getCourse