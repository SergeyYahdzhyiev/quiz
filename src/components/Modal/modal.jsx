import { Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { hideModal } from '../../redux/actions';

import styles from './modal.module.scss';

export const Modal = ({ onConfirm, message }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.modal}>
      <div className={styles.modal_overlay}>
        <div className={styles.modal_window}>
          <p className={styles.modal_text}>{message}</p>
          <Row className={styles.modal_footer}>
            <button onClick={onConfirm}>Yes</button>
            <button onClick={() => dispatch(hideModal())}>No</button>
          </Row>
        </div>
      </div>
    </div>
  );
};
