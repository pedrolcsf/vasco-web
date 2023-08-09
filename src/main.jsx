import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Global } from '@emotion/react'
import Home from './pages/Home'
import { SignIn } from './pages/SignIn'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/home',
    element: <Home />,
  },
])

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/arquibancada) format('ttf');
      }
      `}
  />
)

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: '#303136',
        textColor: '#fff',
      },
    }),
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
