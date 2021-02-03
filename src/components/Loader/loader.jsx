import { Container } from 'react-bootstrap';

import styles from './loader.module.scss';

export const Loader = () => (
  <Container className='text-center mt-5' fluid>
    <div className={styles.lds_ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </Container>
);
