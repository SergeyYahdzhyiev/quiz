import { Container } from 'react-bootstrap';
import { InputForm } from '../../components';

import styles from './player.screen.module.scss';

export const PlayerScreen = () => {
  return (
    <Container className={styles.player} fluid>
      <h2 className={styles.player_title}>Enter Player's Name </h2>
      <InputForm text='CONFIRM' />
    </Container>
  );
};
