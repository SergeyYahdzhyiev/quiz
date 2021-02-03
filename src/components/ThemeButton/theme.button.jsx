import { useDispatch } from 'react-redux';
import { setTheme } from '../../redux/actions';
import { useHistory } from 'react-router-dom';

import styles from './theme.button.module.scss';

export const ThemeButton = ({ text }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handler = (theme) => {
    dispatch(setTheme(theme));
    history.push('/themes/confirm');
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
