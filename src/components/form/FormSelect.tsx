import React from 'react';

interface FormSelectProps {
  prop: string;
}

const FormSelect = (props: FormSelectProps) => {
  const { prop } = props;

  return <div>{prop}</div>;
};

export default FormSelect;
