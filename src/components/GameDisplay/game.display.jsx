import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import styles from './game.display.module.scss';
import { setQuestion } from '../../redux/actions';
import { Loader } from '../Loader';

export const GameDisplay = () => {
  const dispatch = useDispatch();
  const { question, loading, questions } = useSelector(
    (state) => state.questions
  );

  useEffect(() => {
    dispatch(setQuestion(questions));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className={styles.display}>
      {loading ? (
        <Loader />
      ) : (
        <h3 className={styles.display_question}>{question.question}</h3>
      )}
    </Container>
  );
};
