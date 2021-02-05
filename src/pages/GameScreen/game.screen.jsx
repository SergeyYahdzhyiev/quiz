import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';

import { GameDisplay, Answers, TopBar } from '../../components';
import { endGame } from '../../redux/actions';

import styles from './game.screen.module.scss';

export const GameScreen = () => {
  const { prizePool, score, lives } = useSelector((state) => state.game);

  const history = useHistory();
  const dispatch = useDispatch();

  if (score >= 1000000) {
    history.push('/win');
  } else if (!lives) {
    dispatch(endGame());
    history.push('/lose');
  }

  return (
    <Container className={styles.game} fluid>
      <TopBar />
      <GameDisplay />
      <Answers />
      <h1 className={styles.score}>
        Score: <strong>{score}</strong>
      </h1>
      <h3 className={styles.prize}>
        Prize Pool: <strong>{prizePool}</strong>
      </h3>
    </Container>
  );
};
