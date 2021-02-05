import { useSelector, useDispatch } from 'react-redux';

import { capitalize } from '../../plugins';
import { increaseScore, loseLife } from '../../redux/actions';

import styles from './answer.button.module.scss';

export const AnswerButton = ({ text, id }) => {
  const dispatch = useDispatch();

  const { correct } = useSelector((state) => state.questions.question);

  const submitAnswer = (id) => {
    console.log(correct, id);
    if (id === correct) {
      dispatch(increaseScore());
    } else {
      dispatch(loseLife());
    }
  };

  return (
    <button className={styles.answer} onClick={() => submitAnswer(id)}>
      <p className={styles.answer_text}>{capitalize(text)}</p>
    </button>
  );
};
