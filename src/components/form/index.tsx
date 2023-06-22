import { useFormInput } from 'src/hooks/useFormInput';
import { FC } from 'react';

interface FormProps {
    firstName: string;
    lastName:  string;
}

const Form: FC<FormProps> = ({ firstName, lastName }) => {
  // const firstNameProps = useFormInput('Mary');
  //const lastNameProps = useFormInput('Poppins');

  const firstNameProps = useFormInput(firstName);
  const lastNameProps = useFormInput(lastName);

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
    </>
  );
}

export default Form;