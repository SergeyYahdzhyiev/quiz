import styles from './answer.button.module.scss';

export const AnswerButton = ({ text, id }) => {
  return (
    <button className={styles.answer}>
      <p className={styles.answer_text}></p>
    </button>
  );
};
