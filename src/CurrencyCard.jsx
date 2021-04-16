import React, { Component } from 'react'

class CurrencyCard extends Component{

	render(){
		const {name, shortName, value} = this.props
		return (
			<div>
				<div>{name}</div>
				<div>{shortName}</div>
				<div>{value}</div>
			</div>
		)
	}
}

export default CurrencyCard