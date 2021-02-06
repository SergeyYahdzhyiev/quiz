import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { Lives, Skips } from '../';

import styles from './top.bar.module.scss';

export const TopBar = () => {
  const history = useHistory();
  return (
    <Row className={styles.top_bar}>
      <Row>
        <Lives />
        <Skips />
      </Row>
      <Row>
        <button>Skip Question</button>
        <button onClick={() => history.push('/end')}>End Game</button>
      </Row>
    </Row>
  );
};
