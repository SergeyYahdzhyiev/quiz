import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import styles from './confirm.module.scss';
import { capitalize } from '../../plugins';
import { Alert } from '../../components';
import { fetchQuestions } from '../../redux/actions';

export const Confirm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.questions);
  const { show } = useSelector((state) => state.alert);

  useEffect(() => {
    dispatch(fetchQuestions(theme));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className={styles.confirm}>
        <p>
          Do you want to start game with the&nbsp;
          <strong>{capitalize(theme)}</strong> theme?
        </p>
        <Row className='justify-content-center'>
          <button
            className={styles.confirm_button}
            onClick={() => {
              history.push('/game');
            }}
          >
            Yes
          </button>
          <button
            className={styles.confirm_button}
            onClick={() => history.push('/themes')}
          >
            No
          </button>
        </Row>
      </Container>
      <CSSTransition in={show} timeout={500} classNames='alerts' unmountOnExit>
        <Alert />
      </CSSTransition>
    </>
  );
};
