import React from 'react';
import { Index as Route } from './routes/index';
import './custom.styles.css';

function App() {
  return (
    <React.StrictMode>
      <main className="flex-row">
        <Route />
      </main>
    </React.StrictMode>

  );
}

export default App;
