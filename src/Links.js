import React from 'react';

const Links = ({ links }) => (
  <ul>
    Links:
    <li>
      <a href={links.video_link}>Video</a>
    </li>
    <li>
      <a href={links.article_link} target="_blank" rel="noopener noreferrer">
        Article
      </a>
    </li>
  </ul>
);

export default Links;
