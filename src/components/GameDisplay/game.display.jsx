import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import styles from './game.display.module.scss';

export const GameDisplay = () => {
  const { question } = useSelector((state) => state.questions);
  return <Container className={styles.display}>{question.question}</Container>;
};
