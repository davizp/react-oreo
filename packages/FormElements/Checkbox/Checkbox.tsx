import React from 'react';
import { useField } from 'formik';

import classes from '../Form.module.scss';

interface CheckboxProps {
  children: string;
  name: string;
  value: string;
  checked: boolean;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  children,
  ...props
}): JSX.Element => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  const inputClasses = [
    classes.input,
    meta.error && meta.touched ? classes.Invalid : '',
  ];
  const errorLabelClasses = [
    classes['control-label'],
    meta.error && meta.touched ? classes.Invalid : '',
  ];

  return (
    <div className={classes['radio-group']}>
      <label className={classes['control-label']}>
        <input
          onChange={props.onChange}
          className={inputClasses.join(' ')}
          type="checkbox"
          {...field}
          {...props}
        />
        <span className={classes['children-text']}>{children}</span>
      </label>
      {meta.touched && meta.error ? (
        <div className={errorLabelClasses.join(' ')}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Checkbox;
