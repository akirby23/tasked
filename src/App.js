import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom'
import './api/axiosDefaults.js'
import SignUpForm from './pages/auth/SignUpForm';
import LogInForm from './pages/auth/LogInForm';
import LogOut from './pages/auth/LogOut.js';
import { Container } from 'react-bootstrap';
import CreateTaskForm from './pages/tasks/CreateTaskForm.js';


function App() {

  return (
    <div className={styles.App}>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path='/' render={() => <h1>Home Page</h1>}></Route>
          <Route exact path='/log-in' render={() => <LogInForm />}></Route>
          <Route exact path='/sign-up' render={() => <SignUpForm />}></Route>
          <Route exact path='/log-out' render={() => <LogOut />}></Route>
          <Route exact path='/create-task' render={() => <CreateTaskForm />}></Route>
          <Route exact path='/my-tasks' render={() => <h1>My Tasks</h1>}></Route>
          <Route exact path='/my-assigned-tasks' render={() => <h1>My Assigned Tasks</h1>}></Route>
        </Switch>
      </Container>
    </div >
  );
}

export default App;