import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { capitalize } from '../../plugins';
import { endGame } from '../../redux/actions';

import styles from './win.screen.module.scss';

export const WinScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { theme } = useSelector((state) => state.questions);
  console.log(capitalize(theme));
  return (
    <Container className={styles.win} fluid>
      <Container className={styles.win_window}>
        <h2 className={styles.win_window_title}>Congrats!</h2>
        <p className={styles.win_window_text}>
          You've reached the <strong>1,000,000</strong> score and won the game
          in <strong>{capitalize(theme)}</strong> theme! Test your skills in
          other themes.
        </p>
        <Row className='m-0 justify-content-center'>
          <button
            onClick={() => {
              dispatch(endGame());
              history.push('/themes');
            }}
          >
            Back to Themes
          </button>
        </Row>
      </Container>
    </Container>
  );
};
