import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from './components/ui/toaster.tsx'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client = {queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
          <Toaster/>
      <ReactQueryDevtools initialIsOpen= {false}/>
  </QueryClientProvider>
)
