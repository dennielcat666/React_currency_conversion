import React, { Component } from 'react'
import ConvertingForm from './ConvertingForm'
import ExchangeRates from './ExchangeRates'

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