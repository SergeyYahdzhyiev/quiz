import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { AnswerButton } from '../';

import styles from './answers.module.scss';

export const Answers = () => {
  const { content } = useSelector((state) => state.questions.question);
  return (
    <Row className={styles.answers}>
      {content.map((text, index) => (
        <AnswerButton key={index} id={index} text={text} />
      ))}
    </Row>
  );
};
