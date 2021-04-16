import React, { Component } from 'react'

import styles from './ConvertingInput.module.css';

class ConvertingInput extends Component {


	render(){
		const {value, onChange} = this.props
		return (
			<input className={styles.input} value={value} onChange={onChange}/>
		)
	}
}

export default ConvertingInput