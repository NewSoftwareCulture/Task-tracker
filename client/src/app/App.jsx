import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NavBar } from './components/ui/NavBar';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import {
  mainPage,
  notFoundPage,
  signInPage,
  signUpPage,
  taskBoardPage,
  taskEditPage,
  taskPage,
} from './pages';

function App() {
  return (
    <div className="bg-light" style={{ minHeight: '100vh' }}>
      <NavBar />
      <Switch>
        <Route path="/login" exact component={signInPage} />
        <Route path="/registration" exact component={signUpPage} />
        <ProtectedRoute
          path="/task/:taskId/edit"
          exact
          component={taskEditPage}
        />
        <ProtectedRoute path="/task/:taskId" exact component={taskPage} />
        <ProtectedRoute path="/task" exact component={taskBoardPage} />
        <Route path="/404" exact component={notFoundPage} />
        <Route path="/" exact component={mainPage} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
