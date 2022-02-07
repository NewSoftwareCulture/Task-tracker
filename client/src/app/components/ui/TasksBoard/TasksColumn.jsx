/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import { TaskCard } from './TaskCard';
import { updateTask } from '../../../store/tasks';

export function TasksColumn({ status, title, tasks, column, setColumn }) {
  const dispatch = useDispatch();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const setActiveColumn = (target) => {
    const { id } = target;
    if (!id) return;
    if (id === 'list') {
      const newStatus = target.getAttribute('status');
      if (newStatus !== column) setColumn(newStatus);
      return;
    }
    if (id !== column) setColumn(id);
  };

  const handleDragEnterColumn = (event) => {
    setActiveColumn(event.target);
  };

  const handleDragEnterCard = (event) => {
    setActiveColumn(event.target);
    setActiveColumn(event.target.parentNode);
    setActiveColumn(event.target.parentNode.parentNode);
  };

  const dragAndDrop = (taskId) => {
    if (!column || !taskId) return;
    dispatch(updateTask({ id: taskId, payload: { status: column } }));
    setColumn(null);
  };

  const columnStyles = () => {
    if (column === status) return { border: 'dashed green' };
    return {};
  };

  return (
    <div className="col">
      <div
        className="p-3 bg-light bg-gradient h-100 rounded"
        style={columnStyles()}
      >
        <div
          className="list-group h-100"
          onDragOver={debounce(handleDragOver, 100)}
          onDragEnter={handleDragEnterColumn}
          id={status}
        >
          <h3>{title}</h3>
          <hr />
          <div id="list" status={status}>
            {tasks.map((task) => (
              <TaskCard
                key={task._id}
                {...task}
                dragAndDrop={dragAndDrop}
                onDragEnter={handleDragEnterCard}
              />
            ))}
          </div>
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
