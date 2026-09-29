import Navbar from './Navbar.jsx';
import TaskForm from './TaskForm.jsx';
import TaskList from './TaskList.jsx';
import TaskItem from './TaskItem.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

function App() {

  return (
   <>
      <Navbar />
      <TaskForm />
      <TaskList />
      <TaskItem />
      <Home />
      <About />
   </>
  )  
}

export default App
