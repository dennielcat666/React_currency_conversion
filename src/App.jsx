import React, { Component } from 'react'
import ConvertingForm from './ConvertingForm/ConvertingForm'
import ExchangeRates from './ExchangeRates/ExchangeRates'

export default class App extends Component {
	render(){
		return (
			<div>
				<ConvertingForm/>
				<ExchangeRates/>
			</div>
			
		)
	}
}