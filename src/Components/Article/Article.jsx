import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './Article.scss';

class Article extends Component{


	render(){
		const {title,content,tagName,tagImg,articleId} = this.props;

		return (
			<article className={styles.articleContainer}>
				<div className={styles.tag}>
					<div className={styles.tagImg}>
						<img src={tagImg} alt={tagName} />
					</div>
				</div>
				<div className={styles.article}>
					<div className={styles.titleContainer}>
						<h2 className={styles.articleTitle}><Link to={"article/" + articleId}>{title}</Link></h2>
					</div>
					<div className={styles.contentContainer}>
						<p className={styles.articleContnet}>{content}</p>
					</div>
				</div>
				
			</article>
		);
	}
}

export default Article;