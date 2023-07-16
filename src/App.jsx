// import { React } from 'react';
// import Index from './routes/Index';
// import './custom.styles.css';

// function App() {
//   return (
//     <div className="flex-row">
//       <Index />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Index as Route } from './routes/index';
import './custom.styles.css';

function App() {
  return (
    <main className="flex-row">
      <Route />
    </main>
  );
}

export default App;
