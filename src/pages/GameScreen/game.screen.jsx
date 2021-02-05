import { Container } from 'react-bootstrap';

import { GameDisplay, Answers } from '../../components';

import styles from './game.screen.module.scss';

export const GameScreen = () => {
  return (
    <Container className={styles.game} fluid>
      <GameDisplay />
      <Answers />
    </Container>
  );
};