/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Index as Route } from './routes/index';
import './custom.styles.css';

function App() {
  return (
    <React.StrictMode>
      <main className="flex-row">
        <Toaster
          position="top-right"
          reverseOrder={false}
          containerStyle={{
            top: '5rem',
          }}
        />
        <Route />
      </main>
    </React.StrictMode>

  );
}

export default App;
