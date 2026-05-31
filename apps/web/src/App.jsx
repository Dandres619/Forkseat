import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes/routes.jsx';

export function App() {
  return (
    <RouterProvider router={router} />
  );
} 
