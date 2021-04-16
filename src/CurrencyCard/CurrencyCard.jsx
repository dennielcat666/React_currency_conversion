import React, { Component } from 'react'

import styles from './CurrencyCard.module.css';

class CurrencyCard extends Component{

	render(){
		const {name, shortName, value} = this.props
		return (
			<div className={styles.card}>
				<div className={styles.cardName}>{name}</div>
				<div className={styles.cardShortName}>{shortName}</div>
				<div className={styles.cardValue}>{value}</div>
			</div>
		)
	}
}

export default CurrencyCard