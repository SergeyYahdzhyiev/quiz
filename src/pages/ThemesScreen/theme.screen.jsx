import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import styles from './themes.screen.module.scss';

export const ThemesScreen = () => {
  const { name } = useSelector((state) => state.game);
  return (
    <Container className={styles.themes} fluid>
      <h1>Hello {name}!</h1>
      <h4>Please, choose one of the themes:</h4>
    </Container>
  );
};
