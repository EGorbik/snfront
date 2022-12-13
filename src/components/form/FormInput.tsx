import React from 'react';

interface FormInputProps {
  prop: string;
}

const FormInput = (props: FormInputProps) => {
  const { prop } = props;

  return <div>{prop}</div>;
};

export default FormInput;
