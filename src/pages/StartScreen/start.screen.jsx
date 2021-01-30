import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

import styles from './start.screen.module.scss';

export const StartScreen = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showAuthor, setShowAuthor] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 500);
    setTimeout(() => {
      setShowAuthor(true);
    }, 1100);
    setTimeout(() => {
      setShowButton(true);
    }, 1600);
  }, []);
  return (
    <Container className={styles.start} fluid>
      {showTitle && <h1 className={styles.start_title}>QUIZ</h1>}
      {showAuthor && <h6 className={styles.start_author}>by [SY]</h6>}

      {showButton && (
        <Button
          className={styles.start_button}
          onClick={() => history.push('/player')}
        >
          START
        </Button>
      )}
    </Container>
  );
};
