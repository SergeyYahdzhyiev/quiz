import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { Lives, Skips } from '../';
import { loseSkip, showModal } from '../../redux/actions';

import styles from './top.bar.module.scss';

export const TopBar = () => {
  const dispatch = useDispatch();

  const { skips } = useSelector((state) => state.game);

  const handleSkip = () => {
    dispatch(loseSkip());
  };
  return (
    <Row className={styles.top_bar}>
      <Row>
        <Lives />
        <Skips />
      </Row>
      <Row>
        <button onClick={handleSkip} disabled={!skips}>
          Skip Question
        </button>
        <button onClick={() => dispatch(showModal())}>End Game</button>
      </Row>
    </Row>
  );
};
