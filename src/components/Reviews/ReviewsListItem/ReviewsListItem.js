import React from 'react';

const ReviewsListItem = ({ options: { author, content } }) => (
  <li>
    <p>{author}</p>
    <p>{content}</p>
  </li>
);

export default ReviewsListItem;
