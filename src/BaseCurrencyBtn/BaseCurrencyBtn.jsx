import React, { Component } from 'react'

import styles from './BaseCurrencyBtn.module.css';

class BaseCurrencyBtn extends Component{
	render(){
		const {value, onClick} = this.props
		return (
			<button className={styles.btn} value={value} onClick={onClick}>{value}</button>
		)
	}
}

export default BaseCurrencyBtn