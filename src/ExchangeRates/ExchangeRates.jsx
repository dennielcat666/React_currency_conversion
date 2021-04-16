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

class ExchangeRates extends Component{
	state = {
		currencyValues: {
			usd: 0,
			gbp: 0,
			eur: 0,
			byn: 0,
			rub: 0
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
				console.log(this.state);
				this.setState(
					prevState => ({
						...prevState,
						currencyValues: {...prevState.currencyValues, ...currencyValues}
					})
				)
			})
	}

	render(){
		console.log(this.state);
		return (
			<div>
				<div>
					{Object.keys(this.state.currencyValues).map(item => (
							<BaseCurrencyBtn key={item} value={item.toUpperCase()}/>	
						))}
				</div>
				<div className={styles.cardsBlock}>
					{Object.entries(this.state.currencyValues).map(item => (
						<CurrencyCard key={item[0]} name={currencyNames[item[0]]} shortName={item[0].toUpperCase()} value={item[1]}/>)
					)}
				</div>
			</div>
			
		)
	}
}

export default ExchangeRates