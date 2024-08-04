import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import HooksApp from './HooksApp'
// import CounterApp from './01-useState/CounterApp'
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
// import SimpleFormWithCustomHook from './02-useEffect/SimpleFormWithCustomHook'
// import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
import FocusScreen from './04-useRef/FocusScreen'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FocusScreen />
  </React.StrictMode>,
)
