import { Row } from 'react-bootstrap';

import { AnswerButton } from '../';

import styles from './answers.module.scss';

export const Answers = () => {
  return (
    <Row className={styles.answers}>
      <AnswerButton id={0} />
      <AnswerButton id={1} />
      <AnswerButton id={2} />
      <AnswerButton id={3} />
    </Row>
  );
};
