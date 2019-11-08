import React from 'react';
import Item from './Item';

const List = (list, selected) =>
  list.map(el => <Item text={el.name} key={el.name} selected={selected} />);

export default List;
