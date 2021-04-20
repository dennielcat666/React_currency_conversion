import React, { Component } from 'react'
import {Link} from "react-router-dom";

import styles from './Menu.module.css';

class Menu extends Component {
	render() {
		return (
			<div>
				<ul className={styles.menuList}>
					<li><Link className={styles.menuItem} to="/">Menu</Link></li>
					<li><Link className={styles.menuItem} to="/convertingForm">Converting Form</Link></li>
					<li><Link className={styles.menuItem} to="/exchangeRates">Exchange Rates</Link>	</li>
				</ul>
			</div>
		)
	}
}

export default Menu