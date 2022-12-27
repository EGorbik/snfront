import React from 'react';

interface NavbarProps {
  prop: string;
}

const Navbar = (props: NavbarProps) => {
  const { prop } = props;

  return <div>{prop}</div>;
};

export default Navbar;
