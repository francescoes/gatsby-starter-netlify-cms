import React from 'react';
import styles from './HtmlContent.module.scss';

export default function HTMLContent({ content }) {
  return <div className={styles.htmlContent} dangerouslySetInnerHTML={{ __html: content }} />;
}
