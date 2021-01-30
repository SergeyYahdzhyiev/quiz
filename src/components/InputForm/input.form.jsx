import { useState } from 'react';
import { Row } from 'react-bootstrap';

import styles from './input.form.module.scss';

export const InputForm = ({ text }) => {
  const [value, setValue] = useState('');
  return (
    <Row className={styles.input}>
      <input
        type='text'
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={() => console.log('clicked')}>{text}</button>
    </Row>
  );
};
