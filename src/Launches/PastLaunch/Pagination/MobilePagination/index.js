import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from './Arrows';
import List from './List';
import ScrollList from 'react-horizontal-scrolling-menu';

const generateNums = max => {
  const result = [];
  for (let i = 1; i <= max; i++) {
    result.push(i);
  }
  return result;
};

const MobilePaginationContainer = ({ setPastLaunchOffset, lastLaunchID }) => {
  const last = lastLaunchID;

  return (
    last > 0 && (
      <MobilePagination
        setPastLaunchOffset={setPastLaunchOffset}
        lastLaunchID={lastLaunchID}
        last={last}
      />
    )
  );
};

const MobilePagination = ({ setPastLaunchOffset, last }) => {
  const [selected, setSelected] = useState(last);

  const pageNums = generateNums(last);

  const list = pageNums.map(num => ({ name: num }));

  const menuItems = List(list, last);

  const onSelect = key => {
    setPastLaunchOffset(last - key);
    setSelected(key);
  };

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

export default MobilePaginationContainer;
