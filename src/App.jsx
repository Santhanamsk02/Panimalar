import { useState } from 'react'
import { createRoot } from "react-dom/client";
import { Route } from 'react-router';
import { createBrowserRouter,createRoutesFromElements} from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layout/RootLayout';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import AcademicsPage from './Pages/AcademicsPage'
import COEPage from './Pages/COEPage'
import CoursesPage from './Pages/CoursesPage'
import ECPage from './Pages/ECPage'
import FacilityPage from './Pages/FacilityPage'
import PlacementPage from './Pages/PlacementPage'
import AdmissionPage from './Pages/AdmissionPage'
import { AnimatePresence } from 'framer-motion';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route path='/' element={<RootLayout></RootLayout>}>
      
      <Route index element={<HomePage></HomePage>}></Route>
      <Route path='aboutus' element={<AboutPage></AboutPage>}></Route>
      <Route path='academics' element={<AcademicsPage></AcademicsPage>}></Route>
      <Route path='coe' element={<COEPage></COEPage>}></Route>
      <Route path='courses' element={<CoursesPage></CoursesPage>}></Route>
      <Route path='extra-curricular' element={<ECPage></ECPage>}></Route>
      <Route path='facility' element={<FacilityPage></FacilityPage>}></Route>
      <Route path='placement' element={<PlacementPage></PlacementPage>}></Route>
        <Route path='admission' element={<AdmissionPage></AdmissionPage>}></Route>
      
      </Route>
      
  ))

  return (
    <>
        <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
