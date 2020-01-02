import React from 'react';
import { useField } from 'formik';
import Icons from '../../Icons/Icons';

import classes from '../Form.module.scss';

interface SelectProps {
  children: JSX.Element[];
  label: string;
  name: string;
  id: string;
  value: string;
  iconname: string;
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ label, ...props }): JSX.Element => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  const inputClasses = [
    classes.input,
    meta.error && meta.touched ? classes.Invalid : '',
  ];
  const errorLabelClasses = [
    classes['control-label'],
    meta.error && meta.touched ? classes.Invalid : '',
  ];
  const iconClasses = [
    classes.Icon,
    meta.error && meta.touched ? classes.Invalid : '',
  ];

  return (
    <div className={classes['select-wrap']}>
      <label
        className={classes['control-label']}
        htmlFor={props.id || props.name}>
        {label}
      </label>

      <div className={classes['select-container']}>
        <select
          onChange={props.onChange}
          className={inputClasses.join(' ')}
          {...field}
          {...props}
        />

        {props.iconname && (
          <Icons className={iconClasses.join(' ')} name={props.iconname} />
        )}
      </div>

      {meta.touched && meta.error ? (
        <div className={errorLabelClasses.join(' ')}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Select;
