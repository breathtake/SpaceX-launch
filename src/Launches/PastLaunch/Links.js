import React from 'react';

const Links = ({ links: { video_link, article_link } }) => (
  <ul>
    Links:
    <li>
      <a href={video_link}>Video</a>
    </li>
    <li>
      <a href={article_link} target="_blank" rel="noopener noreferrer">
        Article
      </a>
    </li>
  </ul>
);

export default Links;
