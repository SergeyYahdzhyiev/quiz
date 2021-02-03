import { Container } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';

import { InputForm, Alert } from '../../components';

import styles from './player.screen.module.scss';

export const PlayerScreen = () => {
  const { show } = useSelector((state) => state.alert);
  return (
    <Container className={styles.player} fluid>
      <h2 className={styles.player_title}>Enter Player's Name </h2>
      <InputForm />
      <Container className='text-center'>
        <CSSTransition
          in={show}
          timeout={500}
          classNames='alerts'
          unmountOnExit
        >
          <Alert />
        </CSSTransition>
      </Container>
    </Container>
  );
};
