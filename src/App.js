import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom'
import './api/axiosDefaults.js'
import SignUpForm from './pages/auth/SignUpForm';
import LogInForm from './pages/auth/LogInForm';
import LogOut from './pages/auth/LogOut.js';
import { Container } from 'react-bootstrap';
import CreateTaskForm from './pages/tasks/CreateTaskForm.js';
import TaskPage from './pages/tasks/TaskPage.js';
import TasksPage from './pages/tasks/TasksPage.js';
import { useCurrentUser } from './contexts/CurrentUserContext.js';
import EditTaskForm from './pages/tasks/EditTaskForm.js';
import ProfilePage from './pages/profiles/ProfilePage.js';
import EditUsernameForm from './pages/profiles/EditUsernameForm.js';
import EditProfileForm from './pages/profiles/EditProfileForm.js';
import EditPasswordForm from './pages/profiles/EditPasswordForm.js';


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path='/' render={() => <h1>Home Page</h1>}></Route>
          <Route exact path='/my-tasks' render={() => <TasksPage
          filter={`owner__profile=${profile_id}`}
          message='No results found. Adjust the search keyword or create a task.' />}></Route>
          <Route exact path='/my-assigned-tasks' render={() => <TasksPage
          filter={`assignee=${profile_id}`}
          message='You have no assigned tasks.' />}></Route>
          <Route exact path='/log-in' render={() => <LogInForm />}></Route>
          <Route exact path='/sign-up' render={() => <SignUpForm />}></Route>
          <Route exact path='/log-out' render={() => <LogOut />}></Route>
          <Route exact path='/create-task' render={() => <CreateTaskForm />}></Route>
          <Route exact path='/tasks/:id/edit' render={() => <EditTaskForm />}></Route>
          <Route exact path='/my-tasks' render={() => <h1>My Tasks</h1>}></Route>
          <Route exact path='/my-assigned-tasks' render={() => <h1>My Assigned Tasks</h1>}></Route>
          <Route exact path='/tasks/:id' render={() => <TaskPage />}></Route>
          <Route exact path='/profiles/:id' render={() => <ProfilePage />}></Route>
          <Route exact path='/profiles/:id/edit' render={() => <EditProfileForm />}></Route>
          <Route exact path="/profiles/:id/edit/username" render={() => <EditUsernameForm />}></Route>
          <Route exact path="/profiles/:id/edit/password" render={() => <EditPasswordForm/>}></Route>
          <Route render={() => <p>Page not found</p>} />
        </Switch>
      </Container>
    </div >
  );
}

export default App;