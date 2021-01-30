import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { StartScreen, PlayerScreen } from './pages';

export const App = () => {
  return (
    <Router>
      <Container className='wrapper' fluid>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/start' />
          </Route>
          <Route exact path='/start' component={StartScreen} />
          <Route exact path='/player' component={PlayerScreen} />
        </Switch>
      </Container>
    </Router>
  );
};
