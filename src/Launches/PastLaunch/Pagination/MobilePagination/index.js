import React from 'react';
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

const MobilePagination = ({ setPastLaunchOffset, lastLaunchID }) => {
  const nums = generateNums(lastLaunchID);

  const list = nums.map(num => ({ name: num }));

  const menuItems = List(list, lastLaunchID);

  const onSelect = key => {
    setPastLaunchOffset(lastLaunchID - key);
  };

  return (
    <>
      <ScrollList
        data={menuItems}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={lastLaunchID}
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
