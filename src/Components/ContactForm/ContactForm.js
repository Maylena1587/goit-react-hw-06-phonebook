import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactForm.module.css';
import { getContacts } from '../../redux/selectors';
import actions from '../../redux/actions';

function ContactForm() {
  const { register, handleSubmit, errors, reset } = useForm();
  const btn = useRef();
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase(),
      )
    ) {
      alert(`${data.name} is already in Phonebook`);
      return;
    }
    dispatch(actions.addContact(data.name.trim(), data.number.trim()));
    btn.current.blur();
    reset({});
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label}>
        <input
          ref={register({
            required: true,
            minLength: 3,
            maxLength: 18,
            pattern: /^[A-Za-z]+([ A-Za-z]+)*$/,
          })}
          className={styles.addField}
          type="text"
          name="name"
          placeholder="name"
        />
        {errors.name && errors.name.type === 'required' && (
          <p className={styles.error}>Name is required</p>
        )}
        {errors.name && errors.name.type === 'minLength' && (
          <p className={styles.error}>
            Name is too short. Minimum 3 characters required.
          </p>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <p className={styles.error}>
            Name is too long. Maximum 18 characters allowed.
          </p>
        )}
        {errors.name && errors.name.type === 'pattern' && (
          <p className={styles.error}>Name can contain only english letters.</p>
        )}
      </label>
      <label className={styles.label}>
        <input
          ref={register({ required: true, pattern: /^\d+$/ })}
          className={styles.addField}
          type="text"
          name="number"
          placeholder="xxxx-xx-xx"
        />
        {errors.number && errors.number.type === 'required' && (
          <p className={styles.error}>Number is required</p>
        )}
        {errors.number && errors.number.type === 'pattern' && (
          <p className={styles.error}>
            Phone number should consist only from numbers.
          </p>
        )}
      </label>
      <button ref={btn} className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
