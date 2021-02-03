import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import { fetchThemes } from '../../redux/actions';

import styles from './themes.screen.module.scss';

export const ThemesScreen = () => {
  const { name } = useSelector((state) => state.game);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchThemes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className={styles.themes} fluid>
      <h1>Hello {name}!</h1>
      <h4>Please, choose one of the themes:</h4>
    </Container>
  );
};
