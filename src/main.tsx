import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppContextProvider } from './context/AppContextProvider.tsx';
import Form1 from './forms/Form1/Form1.tsx';
import Form2 from './forms/Form2/Form2.tsx';
import Form3 from './forms/Form3/Form3.tsx';
import { MainContainer } from './components/ui/MainContainer.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppContextProvider>
          <MainContainer>
            <Routes>
              <Route path="/" element={<Form1 />} />
              <Route path="/form2" element={<Form2 />} />
              <Route path="/form3" element={<Form3 />} />
            </Routes>
          </MainContainer>
        </AppContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<App />);
