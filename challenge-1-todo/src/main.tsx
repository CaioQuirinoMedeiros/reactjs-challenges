import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './global.css'
import { TodoContextProvider } from './contexts/TodoContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
)