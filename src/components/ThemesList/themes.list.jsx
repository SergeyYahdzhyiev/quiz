import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { ThemeButton } from '../';

import styles from './themes.list.module.scss';

export const ThemesList = () => {
  const { themes } = useSelector((state) => state.questions);

  return (
    <TransitionGroup className={styles.themes_list}>
      {themes.map((theme, index) => (
        <CSSTransition
          key={index}
          timeout={500}
          classNames='themes'
          mountOnEnter
        >
          <ThemeButton text={theme} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
