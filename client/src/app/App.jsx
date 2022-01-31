import React from 'react';
// import styled from 'styled-components';

import { NavBar } from './components/ui/NavBar';
import history from './utils/history';

// const Page = styled`
// `;

function App() {
  return (
    <div className="bg-light" style={{ 'min-height': '100vh' }}>
      <NavBar />
      <div className="contaier">
        <div className="row">
          <div className="col-md-8 offset-md-2 bg-white">
            <p className="m-2">Hello world!</p>
            <button
              type="button"
              className="btn btn-primary m-2"
              onClick={() => {
                history.push('/');
              }}
            >
              Click!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
