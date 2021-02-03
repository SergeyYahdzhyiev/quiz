import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import { Alert, Loader, ThemesList } from '../../components';
import { fetchThemes } from '../../redux/actions';

import styles from './themes.screen.module.scss';

export const ThemesScreen = () => {
  const { name } = useSelector((state) => state.game);
  const { show } = useSelector((state) => state.alert);
  const { loading } = useSelector((state) => state.questions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchThemes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className={styles.themes} fluid>
      <h1>Hello {name}!</h1>
      <h4>Please, choose one of the themes:</h4>
      {loading ? <Loader /> : <ThemesList />}
      <Container className='text-center'>
        <CSSTransition
          in={show}
          timeout={300}
          classNames='alerts'
          unmountOnExit
        >
          <Alert />
        </CSSTransition>
      </Container>
    </Container>
  );
};
