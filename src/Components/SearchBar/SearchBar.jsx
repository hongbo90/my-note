import React, {Component} from 'react';
import {SearchIcon} from '../SvgIcons/SvgIcons';
import styles from './SearchBar.scss';
import {Link} from 'react-router-dom';

class SearchBar extends Component{

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		window.history.back();
	}

	render(){
		return (
			<div className={styles.searchBarContainer}>
				<div className={styles.inputContainer}>
					<span className={styles.searchBarIcon} >
					<SearchIcon/>
					</span>
					<input className={styles.searchBarInput} type="text" placeholder="请输入要搜索的内容" />
				</div>
				<div className={styles.cancel}><a href="javascript:void(0)" onClick={this.handleClick}>取消</a></div>
			</div>
		)
	}
}

export default SearchBar;