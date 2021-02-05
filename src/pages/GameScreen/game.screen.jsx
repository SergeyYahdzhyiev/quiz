import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

import { GameDisplay } from '../../components';

import styles from './game.screen.module.scss';
import { fetchQuestions, setQuestion } from '../../redux/actions';

export const GameScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(setQuestion());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className={styles.game} fluid>
      <GameDisplay />
    </Container>
  );
};
