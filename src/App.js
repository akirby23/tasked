import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Switch>
        <Route exact path='/' render={() => <h1>Home Page</h1>}></Route>
        <Route exact path='/log-in' render={() => <h1>Log In</h1>}></Route>
        <Route exact path='/sign-up' render={() => <h1>Sign Up</h1>}></Route>
      </Switch>
    </div>
  );
}

export default App;