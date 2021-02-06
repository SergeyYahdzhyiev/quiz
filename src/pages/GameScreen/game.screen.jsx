import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { CSSTransition } from 'react-transition-group';

import { GameDisplay, Answers, TopBar, Modal } from '../../components';
import { endGame, hideModal } from '../../redux/actions';

import styles from './game.screen.module.scss';

export const GameScreen = () => {
  const { prizePool, score, lives } = useSelector((state) => state.game);
  const { show } = useSelector((state) => state.modal);

  const history = useHistory();
  const dispatch = useDispatch();

  if (score >= 1000000) {
    history.push('/win');
  } else if (!lives) {
    dispatch(endGame());
    history.push('/lose');
  }

  const handleEnd = () => {
    dispatch(hideModal());
    dispatch(endGame());
    history.push('/themes');
  };

  return (
    <Container className={styles.game} fluid>
      <CSSTransition in={show} classNames='modals' timeout={500} unmountOnExit>
        <Modal
          message='Are you sure you want to end the game?'
          onConfirm={handleEnd}
        />
      </CSSTransition>
      <TopBar />
      <GameDisplay />
      <Answers />
      <Row className={styles.scores}>
        <h1 className={styles.score}>
          Score: <strong>{score}</strong>
        </h1>
        <h3 className={styles.prize}>
          Prize Pool: <strong>{prizePool}</strong>
        </h3>
      </Row>
    </Container>
  );
};
