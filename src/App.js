import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom'
import axios from './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Switch>
        <Route exact path='/' render={() => <h1>Home Page</h1>}></Route>
        <Route exact path='/log-in' render={() => <h1>Log In</h1>}></Route>
        <Route exact path='/sign-up' render={() => <SignUpForm />}></Route>
      </Switch>
    </div>
  );
}

export default App;