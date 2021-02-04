import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import styles from './confirm.module.scss';
import { capitalize } from '../../plugins';

export const Confirm = () => {
  const history = useHistory();
  const { theme } = useSelector((state) => state.questions);
  return (
    <Container className={styles.confirm}>
      <p>
        Do you want to start game with the&nbsp;
        <strong>{capitalize(theme)}</strong> theme?
      </p>
      <Row className='justify-content-center'>
        <button
          className={styles.confirm_button}
          onClick={() => history.push('/game')}
        >
          Yes
        </button>
        <button
          className={styles.confirm_button}
          onClick={() => history.push('/themes')}
        >
          No
        </button>
      </Row>
    </Container>
  );
};
