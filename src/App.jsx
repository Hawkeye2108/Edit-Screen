import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserDetailsForm from './components/UserDetailsForm'
import EditUserDetails from './components/EditUserDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UserDetailsForm/> */}
      <EditUserDetails/>
    </>
  )
}

export default App
