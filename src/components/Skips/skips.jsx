import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { GrRefresh } from 'react-icons/gr';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './skips.module.scss';

export const Skips = () => {
  const { skips } = useSelector((state) => state.game);

  return (
    <Row classNames={styles.skips}>
      <TransitionGroup>
        {Array.from({ length: skips }).map((_, i) => (
          <CSSTransition key={i} classNames='icons' timeout={500}>
            <GrRefresh className={styles.skip} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Row>
  );
};
