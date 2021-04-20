import React, { Component } from 'react'
import CurrencyCard from '../CurrencyCard/CurrencyCard'
import BaseCurrencyBtn from '../BaseCurrencyBtn/BaseCurrencyBtn'
import getCourse from '../api'

import styles from './ExchangeRates.module.css';


const currencyNames = {
	usd: "Доллар США",
	gbp: "Фунт стерлингов Соединенного королевства",
	eur: "Евро",
	byn: "Белорусский рубль",
	rub: "Российский рубль"
}

function calculate(currencyValues, baseCurrency) {
	console.log('currencyValues', currencyValues);
	const foo = Object.entries(currencyValues).reduce((acc, [key, value]) => {
		if (key === baseCurrency) {
			return {
				...acc,
				[key]: 1
			}
		}
		console.log('currencyValues[baseCurrency]', currencyValues[baseCurrency], key, value);
		console.log('acc', acc);
		// 1base * курс рубля к базовой валюте / оставшиеся валюты
		const res = currencyValues[baseCurrency] / value
		return {
			...acc,
			[key]: res
		}
	}, {})
	console.log("foo", foo);
	return foo
}

class ExchangeRates extends Component{
	state = {
		baseCurrency: "rub",
		currencyValues: {
			usd: 1,
			gbp: 1,
			eur: 1,
			byn: 1,
			rub: 1
		}
	}

	componentDidMount(){
		getCourse()
			.then(res => {
				const currencyValues = {};
				Object.keys(currencyNames).forEach(item => {
					const upperItem = item.toUpperCase()
					const newItem = res.Valute[upperItem]
					if(newItem) {
						currencyValues[item] = newItem.Value
					} 
					
				})
				this.setState(
					prevState => ({
						...prevState,
						currencyValues: {...prevState.currencyValues, ...currencyValues}
					})
				)
			})
	}

	handleClick = (e) => {
		if (this.state.baseCurrency === e.target.value) {
			return
		}
		const newCurrencyValues = calculate(this.state.currencyValues, e.target.value)
		this.setState(
			prevState => ({
				...prevState,
				baseCurrency: e.target.value,
				currencyValues: newCurrencyValues
			})
		)
		
	}

	render(){
		return (
			<div>
				<div>
					{Object.keys(this.state.currencyValues).map(item => (
							<BaseCurrencyBtn key={item} value={item} onClick={this.handleClick}/>	
						))}
				</div>
				<div className={styles.cardsBlock}>
					{Object.entries(this.state.currencyValues).map(item => (
						<CurrencyCard key={item[0]} name={currencyNames[item[0]]} shortName={item[0].toUpperCase()} value={item[1].toFixed(2)}/>)
					)}
				</div>
			</div>
			
		)
	}
}

export default ExchangeRates