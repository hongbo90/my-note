import React, {Component} from 'react';
import styles from './Article.scss';

class Article extends Component{


	render(){
		const {title,content} = this.props;

		return (
			<article className={styles.articleContainer}>
				<div className={styles.titleContainer}>
					<h2 className={styles.articleTitle}>{title}</h2>
				</div>
				<div className={styles.contentContainer}>
					<p className={styles.articleContnet}>{content}</p>
				</div>
			</article>
		);
	}
}

export default Article;