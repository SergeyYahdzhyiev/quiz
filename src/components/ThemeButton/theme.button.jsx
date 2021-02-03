import styles from './theme.button.module.scss';

export const ThemeButton = ({ text }) => {
  const handler = (text) => {
    console.log(text);
  };
  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  return (
    <button className={styles.theme_button} onClick={() => handler(text)}>
      {capitalize(text)}
    </button>
  );
};
