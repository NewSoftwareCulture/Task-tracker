/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import { TaskCard } from './TaskCard';
import { update } from '../../../store/tasks';

export function TasksColumn({ status, title, tasks, column, setColumn }) {
  const dispatch = useDispatch();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragEnter = (event) => {
    const { id } = event.target;
    if (id) setColumn(id);
  };

  const dragAndDrop = (taskId) => {
    if (!column || !taskId) return;
    dispatch(update(taskId, { status: column }));
  };

  return (
    <div className="col">
      <div className="p-3 bg-light bg-gradient h-100 rounded">
        <div
          className="list-group h-100"
          onDragOver={debounce(handleDragOver, 100)}
          onDragEnter={handleDragEnter}
          id={status}
        >
          <h3>{title}</h3>
          <hr />
          {tasks.map((task) => (
            <TaskCard key={task._id} {...task} dragAndDrop={dragAndDrop} />
          ))}
        </div>
      </div>
    </div>
  );
}

TasksColumn.defaultProps = {
  title: '',
  status: 'to-do',
  tasks: [],
  column: '',
  setColumn: () => {},
};

TasksColumn.propTypes = {
  title: PropTypes.string,
  status: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  column: PropTypes.string,
  setColumn: PropTypes.func,
};

export default TasksColumn;
