import React, {Component} from 'react';
import styles from './ArticleDetail.scss';

class ArticleDetail extends Component{

	constructor(props){
		super();
		this.state = {
			id:'',
			title:'',
			content:''
		}
	}

	componentWillMount(){
		const articleId = this.props.match.params.id;
		fetch("http://localhost:9000/articles/" + articleId)
			.then(res=>res.json())
			.then((res)=>{
				let { id, title, content } = res;
				this.setState({
					id:id,
					title:title,
					content:content
				})
			})
	}

	render(){
		const {id, title, content} = this.state;
		return (
			<div className={styles.detailContainer}>
				<h2>{title}</h2>
				<p>{content}</p>
			</div>
		)
	}
}

export default ArticleDetail;