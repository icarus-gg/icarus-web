import React from 'react'
import ReactDOM from 'react-dom'

import './css/App.css'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { 
  RouterProvider,
  createBrowserRouter 
} from 'react-router-dom'

import Root from './routes/Root'
import Home from './components/Home'
import PrivacyPolicy from './components/PrivacyPolicy'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />
      }
    ]
  }
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
