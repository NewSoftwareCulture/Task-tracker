import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TasksColumn } from './TasksColumn';
import { getTasks } from '../../../store/tasks';

const columns = [
  {
    status: 'to-do',
    title: 'К выполнению',
  },
  {
    status: 'in-progress',
    title: 'В работе',
  },
  {
    status: 'done',
    title: 'Готово',
  },
];

export function TasksBoard() {
  const [column, setColumn] = useState();
  const tasks = useSelector(getTasks()) || [];

  return (
    <div className="row gx-2">
      {columns.map(({ status, title }) => {
        const data = tasks.filter((t) => t.status === status);
        return (
          <TasksColumn
            key={status}
            status={status}
            title={title}
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
