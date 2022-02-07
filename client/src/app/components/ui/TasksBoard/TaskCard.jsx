import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import history from '../../../utils/history';
import { getDate } from '../../../utils';
import { deleteTask } from '../../../store/tasks';

export function TaskCard({
  _id: taskId,
  deadline,
  title,
  onDragEnter,
  dragAndDrop,
}) {
  const dispatch = useDispatch();

  const getTextClass = () => {
    const now = Date.now();
    return deadline < now ? 'text-danger' : 'text-success';
  };

  const handleDragStart = (e) => {
    e.target.style.opacity = 0.1;
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = 1;
    dragAndDrop(taskId);
  };

  const handleClick = () => {
    history.push(`task/${taskId}/edit`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteTask({ id: taskId }));
  };

  return (
    <div
      role="none"
      className="list-group-item mb-3 bg-light shadow"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragEnter={onDragEnter}
      onClick={handleClick}
      draggable
    >
      <div className="row">
        <div className="col-md-9 pt-2">
          <p className={getTextClass()}>{getDate(deadline).date}</p>
        </div>
        <div className="col-md-2">
          <button type="button" className="btn" onClick={handleDelete}>
            <i className="bi bi-x-lg" />
          </button>
        </div>
      </div>
      <p className="text-secondary text-break text-wrap">{title}</p>
    </div>
  );
}

TaskCard.defaultProps = {
  deadline: Date.now(),
  title: '',
  onDragEnter: () => {},
  dragAndDrop: () => {},
};

TaskCard.propTypes = {
  _id: PropTypes.string.isRequired,
  deadline: PropTypes.number,
  title: PropTypes.string,
  onDragEnter: PropTypes.func,
  dragAndDrop: PropTypes.func,
};

export default TaskCard;
