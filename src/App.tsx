import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppStore } from './store/appStore';

function App() {
  const { theme } = useAppStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-[#1a1a1a]">
      <Outlet />
    </div>
  );
}

export default App;
