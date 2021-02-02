import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { hideAlert } from '../../redux/actions';

import styles from './alert.module.scss';

export const Alert = () => {
  const { show, closable, text } = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  if (show) {
    return (
      <CSSTransition
        in={show}
        timeout={200}
        classNames='alerts'
        mountOnEnter
        unmountOnExit
      >
        <div>
          <Container className={styles.alert} fluid>
            <p>{text}</p>
            {closable && (
              <button onClick={() => dispatch(hideAlert())}>&times;</button>
            )}
          </Container>
        </div>
      </CSSTransition>
    );
  } else {
    return null;
  }
};
