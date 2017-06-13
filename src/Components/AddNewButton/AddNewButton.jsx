import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './AddNewButton.scss';
import { FeatherIcon } from '../SvgIcons/SvgIcons';

class AddNewButton extends Component{
	render(){
		return (
			<Link className={styles.editBtn} to='/add'>
				<div><FeatherIcon width="30" height="30" /></div>
			</Link>
		)
	}
}

export default AddNewButton;