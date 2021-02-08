import { useSelector, useDispatch } from 'react-redux';

import { capitalize } from '../../plugins';
import { increaseScore, loseLife } from '../../redux/actions';
import { Loader } from '../';

import styles from './answer.button.module.scss';

export const AnswerButton = ({ id }) => {
  const dispatch = useDispatch();

  const { correct, content } = useSelector((state) => state.questions.question);
  const { loading } = useSelector((state) => state.questions);

  const text = content && content[id];

  const submitAnswer = (id) => {
    if (id === correct) {
      dispatch(increaseScore());
    } else {
      dispatch(loseLife());
    }
  };

  return (
    <button
      className={styles.answer}
      onClick={() => submitAnswer(id)}
      disabled={loading}
    >
      {loading ? (
        <Loader />
      ) : (
        <p className={styles.answer_text}>{capitalize(text)}</p>
      )}
    </button>
  );
};
