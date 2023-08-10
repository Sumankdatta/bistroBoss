import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/route.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './context/AuthProvider'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='lg:w-[1160px] mx-auto'>
        <HelmetProvider>
          <RouterProvider router={router} />
          <Toaster />
        </HelmetProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
