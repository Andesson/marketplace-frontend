import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'

function App() {
  const [count, setCount] = useState(0)
  const handleLogin = (email: string, password: string) => {
    console.log('Login realizado com:', email, password);
  };
  return (
    <>
      <div>
        <LoginForm onLogin={handleLogin} />
      </div>
    </>
  )
}

export default App
