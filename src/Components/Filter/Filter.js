import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { getFilter } from '../../redux/selectors';
import actions from '../../redux/actions';

function Filter() {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  return (
    <form className={styles.form}>
      <label>
        <span className={styles.title}>Find contacts by name</span>
        <input
          className={styles.searchField}
          type="text"
          value={filter}
          onChange={e => dispatch(actions.changeFilter(e.target.value))}
        />
      </label>
    </form>
  );
}

export default Filter;
