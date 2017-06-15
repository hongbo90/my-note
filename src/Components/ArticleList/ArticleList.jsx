import React, {Component} from 'react';
import Article from '../Article/Article';
import styles from './ArticleList.scss';

class ArticleList extends Component{

	constructor(props){
		super(props);
		this.state = {
			articleList:[
				// {
			 //      "id": 10000,
			 //      "title": "first article",
			 //      "content": "This is content",
			 //      "create_at": "2017-4-27 16:00:12",
			 //      "edit_at": "2017-4-27 16:00:12"
			 //		 "tag_name": "",
			 //		 "tag_img": ""
			 //    }
			]
		}
	}

	componentWillMount(){

		let newState = this.state;
		const apiUrl = "http://localhost:9000/articles";
		fetch(apiUrl)
			.then(res=>res.json())
			.then((res)=>{
				let articleList = res;
				let newState = this.state;
				newState.articleList = articleList.reverse();
				this.setState(newState)
			});
	}

	render(){
		const {articleList} = this.state;
		return (
			<div className={styles.container}>
			{
				articleList.map((item,index)=>{
					return (
						<Article title={item.title} content={item.content} key={index} tagName={item.tag_name} tagImg={item.tag_img} articleId={item.id} />
					)
				})
			}
			</div>
		);
	}
}

export default ArticleList;