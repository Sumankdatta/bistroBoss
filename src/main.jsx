import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/route.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './context/AuthProvider'
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='lg:w-[1160px] mx-auto'>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <RouterProvider router={router} />
            <Toaster />
          </HelmetProvider>
        </QueryClientProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
