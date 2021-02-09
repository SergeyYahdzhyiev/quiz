import { useDispatch } from 'react-redux';
import { setTheme } from '../../redux/actions';
import { useHistory } from 'react-router-dom';

import { capitalize } from '../../plugins';

import styles from './theme.button.module.scss';

export const ThemeButton = ({ text }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handler = (theme) => {
    dispatch(setTheme(theme));
    history.push('/confirm');
  };

  return (
    <button className={styles.theme_button} onClick={() => handler(text)}>
      {capitalize(text)}
    </button>
  );
};
