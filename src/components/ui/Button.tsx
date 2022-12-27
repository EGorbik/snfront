import React from 'react';

interface ButtonProps {
  prop: string;
}

const Button = (props: ButtonProps) => {
  const { prop } = props;

  return <div>{prop}</div>;
};

export default Button;
