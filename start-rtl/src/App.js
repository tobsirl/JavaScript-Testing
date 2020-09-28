import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import { TodoList } from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-body">
          <BrowserRouter>
            <Route exact path="/" component={TodoList} />
          </BrowserRouter>
        </div>
        <h2>Getting started with React testing library</h2>
      </header>
    </div>
  );
}
export default App;
