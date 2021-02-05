import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ImHeart } from 'react-icons/im';

import styles from './lives.module.scss';

export const Lives = () => {
  const { lives } = useSelector((state) => state.game);

  return (
    <Row className={styles.lives}>
      {Array.from({ length: lives }).map((_, i) => (
        <ImHeart key={i} className={styles.heart} />
      ))}
    </Row>
  );
};
