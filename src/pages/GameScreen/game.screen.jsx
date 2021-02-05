import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import { GameDisplay, Answers } from '../../components';

import styles from './game.screen.module.scss';

export const GameScreen = () => {
  const { prizePool, score } = useSelector((state) => state.game);
  return (
    <Container className={styles.game} fluid>
      <GameDisplay />
      <Answers />
      <h1>Prize Pool: {prizePool}</h1>
      <h3>Score: {score}</h3>
    </Container>
  );
};
