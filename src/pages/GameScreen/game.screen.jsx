import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import { GameDisplay, Answers, TopBar } from '../../components';

import styles from './game.screen.module.scss';

export const GameScreen = () => {
  const { prizePool, score } = useSelector((state) => state.game);

  return (
    <Container className={styles.game} fluid>
      <TopBar />
      <GameDisplay />
      <Answers />
      <h1 className={styles.score}>Score: {score}</h1>
      <h3 className={styles.prize}>Prize Pool: {prizePool}</h3>
    </Container>
  );
};
