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
  const { message } = useSelector((state) => state.display);

  useEffect(() => {
    dispatch(setQuestion(questions));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getContent() {
    if (loading && !message) {
      return <Loader />;
    } else if (message) {
      switch (message) {
        case 'Correct!':
          return <h3 className={styles.display_correct}>{message}</h3>;
        default:
          return <h3 className={styles.display_wrong}>{message}</h3>;
      }
    } else {
      return <h3 className={styles.display_question}>{question.question}</h3>;
    }
  }
  return <Container className={styles.display}>{getContent()}</Container>;
};
