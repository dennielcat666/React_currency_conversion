import React, { Component } from 'react'
import ConvertingInput from './ConvertingInput'
import getCourse from './api'


// const courseBuy = 75;
// const courseSale = 76;

function toUsd(rub, curentCourseBuy) {
	return (rub / curentCourseBuy).toFixed(2);
}

function toRub(usd, curentCourseSale) {
	return (usd * curentCourseSale).toFixed(2);
}

class ConvertingForm extends Component {
	state = {
		usd: '',
		rub: '',
		course: 1
	}

	componentDidMount(){
		getCourse()
			.then(res => res.Valute.USD.Value)
			.then(res => this.setState({course: res}))
	}

	handleChangeUsd = (e) => {
		// this.setState({usd: e.target.value, rub: toRub(e.target.value, courseSale)})
		this.setState(prevState => ({...prevState, usd: e.target.value, rub: toRub(e.target.value, prevState.course)}))
	}

	handleChangeRub = (e) => {
		// this.setState({rub: e.target.value, usd: toUsd(e.target.value, courseBuy)})
		this.setState(prevState => ({...prevState, rub: e.target.value, usd: toUsd(e.target.value, prevState.course)}))
	}

	render(){
		return (
			<div>
				<span>USD</span>
				<ConvertingInput value={this.state.usd} onChange={this.handleChangeUsd}/>
				<span>in RUB</span>
				<ConvertingInput value={this.state.rub} onChange={this.handleChangeRub}/>
			</div>
		)
	}
}

export default ConvertingForm