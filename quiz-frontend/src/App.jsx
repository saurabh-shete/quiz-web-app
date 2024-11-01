import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** Import components */
import Main from './components/Main'
import Quiz from './components/Quiz'
import Result from './components/Result'
import { CheckUserExist } from './helper/helper.jsx'

/** Define routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/quiz',
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    )
  },
  {
    path: '/result',
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    )
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
