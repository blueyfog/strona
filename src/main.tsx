import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.tsx';
import GalleryPage from './pages/Gallery/GalleryPage.tsx';
import AboutPage from './pages/About/AboutPage.tsx';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)