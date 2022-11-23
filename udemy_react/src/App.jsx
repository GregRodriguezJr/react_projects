import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo"

function App() {

  return (
    <div>
      <h1>To Do</h1>
      <Todo text='test prop one'/>
      <Todo text='test prop two'/>
      <Todo text='test prop three'/>
      <Modal />
      <Backdrop />
    </div>
  )
}

export default App
