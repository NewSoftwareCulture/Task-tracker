import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { InputDate } from '../../common/InputDate';
import { InputText } from '../../common/InputText';
import { InputTextArea } from '../../common/InputTextArea';
import { InputSelect } from '../../common/InputSelect';
import { columnsTasks } from '../../../config/columnsTasks';
import { validatorConfig } from '../../../config/validationConfig';
import { getDate, validator } from '../../../utils';

const convertMsToDate = (ms) => {
  const { year, month, day } = getDate(ms);
  return `${year}-${month}-${day}`;
};
const convertDateToMs = (date) => new Date(date).getTime();

export function TaskForm({
  _id: taskId,
  title,
  status,
  accountable,
  deadline,
  description,
  storeFunc,
}) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    taskId,
    title,
    status,
    accountable,
    description,
    deadline: convertMsToDate(deadline),
  });

  const [errors, setErrors] = useState({});

  const handleChangeTitle = (e) =>
    setData((prev) => ({ ...prev, title: e.target.value }));

  const handleChangeStatus = (e) =>
    setData((prev) => ({ ...prev, status: e.target.value }));

  const handleChangeAccountable = (e) =>
    setData((prev) => ({ ...prev, accountable: e.target.value }));

  const handleChangeDeadline = (e) =>
    setData((prev) => ({ ...prev, deadline: e.target.value }));

  const handleChangeDescription = (e) =>
    setData((prev) => ({ ...prev, description: e.target.value }));

  const validate = () => {
    const validationErrors = validator(data, validatorConfig);
    setErrors(validationErrors);

    if (isEmpty(validationErrors)) return true;
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { ...data, deadline: convertDateToMs(data.deadline) };

    const isValid = validate();
    if (!isValid) return;

    dispatch(storeFunc({ id: taskId, payload }));
  };

  useEffect(validate, [data]);

  return (
    <form className="g-3 needs-validation p-4" onSubmit={handleSubmit}>
      <InputText
        name="task-title"
        placeholder="Заголовок"
        value={data.title}
        feedback={errors.title}
        onChange={handleChangeTitle}
      />
      <InputSelect
        name="task-status"
        title="Статус"
        value={data.status}
        options={columnsTasks}
        feedback={errors.status}
        onChange={handleChangeStatus}
      />
      <div className="mt-3 mb-3">
        <InputText
          name="task-accountable"
          placeholder="Ответственный"
          value={data.accountable}
          onChange={handleChangeAccountable}
        />
      </div>
      <div className="mt-3 mb-3">
        <InputDate
          title="Сроки"
          value={data.deadline}
          onChange={handleChangeDeadline}
        />
      </div>

      <InputTextArea
        title="Описание"
        value={data.description}
        placeholder="Описание"
        rows="3"
        onChange={handleChangeDescription}
      />
      <button
        type="submit"
        className="btn btn-lg btn-outline-primary w-100 mt-4"
      >
        Сохранить
      </button>
    </form>
  );
}

TaskForm.defaultProps = {
  _id: '',
  title: '',
  status: 'to-do',
  accountable: '',
  deadline: Date.now(),
  description: '',
  storeFunc: () => {},
};

TaskForm.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  status: PropTypes.string,
  accountable: PropTypes.string,
  deadline: PropTypes.number,
  description: PropTypes.string,
  storeFunc: PropTypes.func,
};

export default TaskForm;
