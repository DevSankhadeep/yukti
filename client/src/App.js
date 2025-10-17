import React from 'react';
import ChatInterface from './components/Chat/ChatInterface';
import ModelSelector from './ModelSwitcher/ModelSelector';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ModelSelector />
      </header>
      <main className="App-main">
        <ChatInterface />
      </main>
    </div>
  );
}

export default App;