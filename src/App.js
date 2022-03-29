import './App.css';
import ProfilePage from './pages/profile.page';
import SigninPage from './pages/signin.page';
import SignupPage from './pages/signup.page';
import CreateTaskPage from './pages/task.create.page';
import TaskDetails from './pages/task.details.page';
import TaskListPage from './pages/task.list.page';
//import { TaskComponent } from './components/task.component';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//component
//- reusable entity
function App() {

  return <div className="container">
    <BrowserRouter>
   {/*/<h1 className="header">Task Manager</h1>}/*/}
    <Routes>
      <Route path="signup" element={<SignupPage/>}/>
      <Route path="/" element={<SigninPage/>}/>
      <Route path="profile" element={<ProfilePage/>}/>
      <Route path="task-details" element={<TaskDetails/>}/>
      <Route path="task-create" element={<CreateTaskPage/>}/>
      <Route path="task-list" element={<TaskListPage/>}/>
      
    </Routes>
    </BrowserRouter>
  </div>
}

export default App;
