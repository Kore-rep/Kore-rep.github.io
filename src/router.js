import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import HomeScreen from './components/homeScreen/homeScreen';

export function generateRouter() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomeScreen />,
        },
    ]);
    return <RouterProvider router={router} />;
}
