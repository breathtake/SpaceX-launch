import React, { useState, useEffect } from 'react';
import ScrollList from 'react-horizontal-scrolling-menu';

const generateNums = max => {
  const result = [];
  for (let i = 1; i <= max; i++) {
    result.push(i);
  }
  return result;
};

const nums = generateNums(83);

const list = nums.map(num => ({ name: num }));
// const list = [
//   { name: 'item1' },
//   { name: 'item2' },
// ];

const Item = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>;
};

const List = (list, selected) =>
  list.map(el => <Item text={el.name} key={el.name} selected={selected} />);

const Arrow = ({ text, className }) => <div className={className}>{text}</div>;

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selectedItem = '83';

const MobilePagination = () => {
  const [selected, setSelected] = useState(selectedItem);

  const menuItems = List(list, selected);

  const onSelect = key => {
    setSelected(key);
  };

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <>
      <ScrollList
        data={menuItems}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selected}
        onSelect={onSelect}
        wheel
        scrollToSelected
        alignCenter
        inertiaScrolling
        inertiaScrollingSlowdown={1}
      />
    </>
  );
};

export default MobilePagination;
