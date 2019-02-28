import React from 'react';
import Post from '../../components/Post/Post';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <Post
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

export default BlogPostPreview;
