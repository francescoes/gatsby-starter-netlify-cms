import React from 'react';
// import Helmet from "react-helmet";
import HTMLContent from '../HtmlContent/HtmlContent';
import styles from './Page.module.scss';

export default function Page({ content, title }) {
  return (
    <div>
      <div className={styles.title}>{title}</div>
      <HTMLContent content={content} />
    </div>
  );
}
