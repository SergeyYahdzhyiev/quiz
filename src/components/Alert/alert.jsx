import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { hideAlert } from '../../redux/actions';

import styles from './alert.module.scss';

export const Alert = () => {
  const { show, closable, text } = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  if (show) {
    return (
      <Container className={styles.alert} fluid>
        <p>{text}</p>
        {closable && (
          <button onClick={() => dispatch(hideAlert())}>&times;</button>
        )}
      </Container>
    );
  } else {
    return null;
  }
};
