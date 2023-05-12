import './App.css';
import SearchHeader from './components/SearchHeader';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import { DarkModeProvider } from './context/DarkModeContext';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <SearchHeader/>
        <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet/>
        </QueryClientProvider>
        </YoutubeApiProvider>
      </DarkModeProvider>
    </div>
  );
}

export default App;
