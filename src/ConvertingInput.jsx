import React, { Component } from 'react'

class ConvertingInput extends Component {


	render(){
		const {value, onChange} = this.props
		return (
			<input value={value} onChange={onChange}/>
		)
	}
}

export default ConvertingInput