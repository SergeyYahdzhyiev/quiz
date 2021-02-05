import { Row } from 'react-bootstrap';

import { Lives } from '../';

import styles from './top.bar.module.scss';

export const TopBar = () => {
  return (
    <Row className={styles.top_bar}>
      <Lives />
    </Row>
  );
};
