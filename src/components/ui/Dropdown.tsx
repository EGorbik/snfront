import React from 'react';

interface DropdownProps {
  prop: string;
}

const Dropdown = (props: DropdownProps) => {
  const { prop } = props;

  return <div>{prop}</div>;
};

export default Dropdown;
