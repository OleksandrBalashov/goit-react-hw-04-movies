import React from 'react';
import './BtnLoadMore.scss';

const BtnLoadMore = ({ onClick }) => {
  return (
    <div className="WrapBtnLoadMore">
      <button type="button" className="BtnLoadMore" onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default BtnLoadMore;
