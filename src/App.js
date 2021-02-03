import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { StartScreen, PlayerScreen, Admin } from './pages';

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
          <Route exact path='/admin' component={Admin} />
        </Switch>
      </Container>
    </Router>
  );
};
