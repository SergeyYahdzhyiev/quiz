import { Container } from 'react-bootstrap';

import { GameDisplay } from '../../components';

import styles from './game.screen.module.scss';

export const GameScreen = () => {
  return (
    <Container className={styles.game} fluid>
      <GameDisplay />
    </Container>
  );
};
