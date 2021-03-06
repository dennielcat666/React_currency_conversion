import React, { Component } from 'react'
import ConvertingInput from '../ConvertingInput/ConvertingInput'
import getCourse from '../api'

import styles from './ConvertingForm.module.css';

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
		this.setState(prevState => ({...prevState, usd: e.target.value, rub: toRub(e.target.value, prevState.course)}))
	}

	handleChangeRub = (e) => {
		this.setState(prevState => ({...prevState, rub: e.target.value, usd: toUsd(e.target.value, prevState.course)}))
	}

	render(){
		return (
			<div className={styles.form}>
				<span className={styles.text}>USD</span>
				<ConvertingInput value={this.state.usd} onChange={this.handleChangeUsd}/>
				<span className={styles.text}>in RUB</span>
				<ConvertingInput value={this.state.rub} onChange={this.handleChangeRub}/>
			</div>
		)
	}
}

export default ConvertingForm