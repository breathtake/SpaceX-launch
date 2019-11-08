import React from 'react';
import StyledItem from 'styles/Pagination/MobilePagination/StyledItem';

const Item = ({ text, selected }) => {
  return <StyledItem selected={selected}>{text}</StyledItem>;
};

export default Item;
