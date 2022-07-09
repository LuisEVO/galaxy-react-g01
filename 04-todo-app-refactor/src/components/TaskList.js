import React, { useState } from 'react'
import TaskItem from './TaskItem';
import TaskItemEdit from './TaskItemEdit';

const TaskList = ({ tasks, updateTask, removeTask }) => {
  const [taskSelected, setTaskSelected] = useState();

  const confirmUpdateTask = (id) => {
    updateTask(id, {name: taskSelected.name});
    setTaskSelected(undefined);
  }

  return (
    <ul>
        {tasks.map((task, index) =>
          task.id === taskSelected?.id ? (
            <TaskItemEdit
              key={task.id}
              task={task}
              taskSelected={taskSelected}
              setTaskSelected={setTaskSelected}
              confirmUpdateTask={confirmUpdateTask}
            />
          ) : (
            <TaskItem
              key={task.id}
              task={task}
              updateTask={updateTask}
              removeTask={removeTask}
              setTaskSelected={setTaskSelected} />
          )
        )}
      </ul>
  )
}

export default TaskList