import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ConvertingForm from './ConvertingForm/ConvertingForm'
import ExchangeRates from './ExchangeRates/ExchangeRates'
import Menu from './Menu/Menu'

export default class App extends Component {
	render(){
		return (
			<Router>
				<div>
					<Menu/>
					<Switch>
						<Route path="/convertingForm" component={ConvertingForm}/>
						<Route path="/exchangeRates" component={ExchangeRates}/>
					</Switch>
				</div>
			</Router>
			
		)
	}
}