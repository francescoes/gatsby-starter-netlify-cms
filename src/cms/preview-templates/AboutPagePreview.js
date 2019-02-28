import React from 'react';

import Page from '../../components/Page/Page';

const AboutPagePreview = ({ entry, widgetFor }) => (
  <Page title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

export default AboutPagePreview;
