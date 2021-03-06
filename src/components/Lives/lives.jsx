import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ImHeart } from 'react-icons/im';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './lives.module.scss';

export const Lives = () => {
  const { lives } = useSelector((state) => state.game);

  return (
    <Row className={styles.lives}>
      <TransitionGroup>
        {Array.from({ length: lives }).map((_, i) => (
          <CSSTransition key={i} classNames='icons' timeout={500}>
            <ImHeart className={styles.heart} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Row>
  );
};
