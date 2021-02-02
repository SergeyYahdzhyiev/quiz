import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setName, showAlert } from '../../redux/actions';

import styles from './input.form.module.scss';

export const InputForm = () => {
  const [value, setValue] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  function handler() {
    if (!value) {
      dispatch(showAlert('Some text', true));
    } else {
      dispatch(setName(value));
      setValue('');
      history.push('/themes');
    }
  }
  return (
    <Row className={styles.input}>
      <input
        type='text'
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={handler}>CONFIRM</button>
    </Row>
  );
};
