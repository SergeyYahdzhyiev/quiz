import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import styles from './lose.screen.module.scss';

export const LoseScreen = () => {
  const history = useHistory();
  return (
    <Container className={styles.lose} fluid>
      <Container className={styles.lose_window}>
        <p className={styles.lose_window_text}>Unfortunately, you've lost...</p>
        <Row className='m-0 justify-content-center'>
          <button onClick={() => history.push('/themes')}>
            Back to Themes
          </button>
        </Row>
      </Container>
    </Container>
  );
};
