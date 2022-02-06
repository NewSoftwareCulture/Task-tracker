import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../../../utils';

export function TaskCard({ _id: taskId, deadline, title, dragAndDrop }) {
  const getTextClass = () => {
    const now = Date.now();
    return deadline < now ? 'text-danger' : 'text-success';
  };

  const handleDragStart = (e) => {
    e.target.style.opacity = 0.1;
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = 1;
    dragAndDrop(taskId, title);
  };

  return (
    <div
      role="none"
      className="list-group-item mb-3 bg-light shadow"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      draggable
    >
      <p className={getTextClass()}>{getDate(deadline).fullDate}</p>
      <h3>{title}</h3>
    </div>
  );
}

TaskCard.defaultProps = {
  deadline: Date.now(),
  title: '',
  dragAndDrop: () => {},
};

TaskCard.propTypes = {
  _id: PropTypes.string.isRequired,
  deadline: PropTypes.number,
  title: PropTypes.string,
  dragAndDrop: PropTypes.func,
};

export default TaskCard;
