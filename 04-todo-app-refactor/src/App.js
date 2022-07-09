import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import useStateCrud from './hooks/useStateCrud';

const DEFAULT_TASKS = [
  { id: 1, name: 'Tarea 1', complete: true },
  { id: 2, name: 'Tarea 2', complete: false },
];

function App() {
  const { items: tasks, addItem, updateItem, removeItem } = useStateCrud(DEFAULT_TASKS);

  const addTask = (task) => {
    addItem({ name: task })
  };

  const updateTask = (id, updatedTask) => {
    updateItem(id, updatedTask)
  };

  const removeTask = (id) => {
    removeItem(id)
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <TaskList 
        tasks={tasks}
        updateTask={updateTask}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
