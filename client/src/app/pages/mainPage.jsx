import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageWrapper } from '../components/common/PageWrapper';
import { ImageMain } from '../components/ui/ImageMain';
import { getAuthStatus } from '../store/auth';

export function mainPage() {
  const isAuth = useSelector(getAuthStatus());
  return (
    <PageWrapper>
      <div className="row">
        <ul className="col-md-4 list align-self-center">
          <h1 className="list-item text-center pb-5">✅ Трекер задач</h1>
          <h4 className="list-item text-start pb-2 ps-5">
            Это не просто работа
          </h4>
          <h4 className="list-item text-start pb-3 ps-5">
            Это координация и планирование действий
          </h4>
          <p className="list-item text-start ps-5 text-muted">
            Карточки задач помогут эффективно организовывать работу в течение
            дня. Создавайте и отслеживайте задачи, а также управляйте ими. Вы
            можете ставить дедлайны, добавлять описания к задачам и многое
            другое!
          </p>
          <div className="d-flex justify-content-center">
            <Link
              className="btn-lg btn-primary text-decoration-none mt-4"
              aria-current="page"
              to={isAuth ? '/task' : '/login'}
            >
              {isAuth ? 'Моя доска задач' : 'Мой аккаунт'}
            </Link>
          </div>
        </ul>
        <span className="col-md-8 align-self-center">
          <ImageMain />
        </span>
      </div>
    </PageWrapper>
  );
}

export default mainPage;
