import React, { Component } from 'react'

import styles from './BaseCurrencyBtn.module.css';

class BaseCurrencyBtn extends Component{
	render(){
		const {value} = this.props
		return (
			<button className={styles.btn}>{value}</button>
		)
	}
}

export default BaseCurrencyBtn