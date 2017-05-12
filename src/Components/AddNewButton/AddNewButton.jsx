import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './AddNewButton.scss';

class AddNewButton extends Component{
	render(){
		return (
			<Link className={styles.editBtn} to='/add'>
				Add<img />
			</Link>
		)
	}
}

export default AddNewButton;