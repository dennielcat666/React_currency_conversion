import React, { Component } from 'react'
import CurrencyCard from './CurrencyCard'
import getCourse from './api'


const currencyNames = {
	usd: "Доллар США",
	gbp: "Фунт стерлингов Соединенного королевства",
	eur: "Евро",
	byn: "Белорусский рубль"
}

class ExchangeRates extends Component{
	state = {
		currencyValues: {
			usd: 0,
			gbp: 0,
			eur: 0,
			byn: 0
		}
	}

	componentDidMount(){
		getCourse()
			.then(res => {
				const currencyValues = {};
				Object.keys(currencyNames).forEach(item => {
					const upperItem = item.toUpperCase()
					const newItem = res.Valute[upperItem].Value
					currencyValues[item] = newItem
				})
				this.setState({currencyValues})
			})
	}

	render(){
		return (
			<div>
				{Object.entries(this.state.currencyValues).map(item => (
					<CurrencyCard key={item[0]} name={currencyNames[item[0]]} shortName={item[0]} value={item[1]}/>)
				)}
			</div>
		)
	}
}

export default ExchangeRates