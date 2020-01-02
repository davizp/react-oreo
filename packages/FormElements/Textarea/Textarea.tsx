import React from 'react';
import { useField } from 'formik';

import classes from '../Form.module.scss';

interface InputProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<InputProps> = ({ label, ...props }): JSX.Element => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);

  const inputClasses = [
    classes.textarea,
    classes.input,
    meta.error && meta.touched ? classes.Invalid : '',
  ];
  const errorLabelClasses = [
    classes['control-label'],
    meta.error && meta.touched ? classes.Invalid : '',
  ];

  return (
    <div className={classes['input-wrap']}>
      <label
        className={classes['control-label']}
        htmlFor={props.id || props.name}>
        {label}
      </label>

      <textarea
        onChange={props.onChange}
        className={inputClasses.join(' ')}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className={errorLabelClasses.join(' ')}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Textarea;
