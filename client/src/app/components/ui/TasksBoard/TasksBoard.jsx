import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TasksColumn } from './TasksColumn';
import { getTasks } from '../../../store/tasks';
import { columnsTasks } from '../../../config/columnsTasks';

export function TasksBoard() {
  const [column, setColumn] = useState();
  const tasks = useSelector(getTasks()) || [];

  return (
    <div className="row gx-2">
      {columnsTasks.map(({ value, label }) => {
        const data = tasks.filter(({ status }) => status === value);
        return (
          <TasksColumn
            key={value}
            status={value}
            title={label}
            tasks={data}
            column={column}
            setColumn={setColumn}
          />
        );
      })}
    </div>
  );
}

export default TasksBoard;
