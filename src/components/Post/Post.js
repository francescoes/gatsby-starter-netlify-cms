import React from 'react';
// import Helmet from "react-helmet";
import HTMLContent from '../HtmlContent/HtmlContent';
import styles from './Post.module.scss';

// console.log(styles);

export default function Post({ content, description, tags, title }) {
  return (
    <div>
      <div className={styles.title}>{title}</div>
      <div>{tags}</div>
      <div>{description}</div>
      <HTMLContent className={styles.htmlContent} content={content} />
    </div>
  );
}
