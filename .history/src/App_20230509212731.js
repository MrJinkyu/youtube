import './App.css';
import SearchHeader from './components/SearchHeader';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <SearchHeader/>
      <QueryClientProvider client={queryClient}>
        <Outlet/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
