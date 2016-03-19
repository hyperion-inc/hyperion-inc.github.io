import React from 'react';
// import { Link } from 'react-router';
import Helmet from 'react-helmet';
import invariant from 'invariant';

import styles from './index.css';

export default ({ children, __filename, __url, head, body }) => { // eslint-disable-line
  invariant(
    typeof head.title === 'string',
    `Your page '${__filename}' needs a title`
  );

  const metaTitle = head.metaTitle ? head.metaTitle : head.title;

  const meta = [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: metaTitle },
    { property: 'og:url', content: __url },
    { property: 'og:description', content: head.description },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:creator', content: `@${head.twitter}` },
    { name: 'twitter:description', content: head.description },
    { name: 'description', content: head.description },
  ];
  return (
    <div>
      <Helmet
        title= { metaTitle }
        meta = { meta }
      />
      <div className= { styles.background }></div>
      <div className= { styles.title }>HYPERION INDUSTRIES</div>
      <div className= { styles.grid }></div>
      <div className= { styles.noise }></div>
      { head.title && <h1>{ head.title }</h1>}
      { body && <div dangerouslySetInnerHTML={ { __html: body } } /> }
    </div>
  );
};
