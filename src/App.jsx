import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/common/Navbar';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Error from './pages/Error';
import Login from './pages/Login';
import DashboardHome from './components/core/dashboard/DashboardHome';
import Signup from './pages/Signup';
import PrivateRoute from './components/core/auth/PrivateRoute';
import Dashboard from './pages/Dashboard';
import UploadPOD from './components/core/POD/UploadPOD';
import SearchPOD from './components/core/POD/SearchPOD';
import PendingClient from './components/core/client/PendingClient';
import ApproveClient from './components/core/client/ApproveClient';
import ApprovedStaff from './components/core/staff/ApprovedStaff';
import PendingStaff from './components/core/staff/PendingStaff';
import OpenRoute from './components/core/auth/OpenRoute';
import VerifyEmail from './pages/VerifyEmail';
import ApprovedRoute from './components/core/auth/ApprovedRoute';


function App() {


  return (
    <>
      <div>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />} />


          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          {/* <Route
            path="/verify-email"
            element={
              <OpenRoute>
                <VerifyEmail />
              </OpenRoute>
            }
          /> */}

          <Route path='/verify-email' element={<VerifyEmail />} />

          <Route path='/services' element={<Services />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='*' element={<Error />} />


          <Route element=
            {<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
            <Route path='/dashboard/home' element={<DashboardHome />} />

            <Route path='/dashboard/upload-pod' element={

              <ApprovedRoute>
                <UploadPOD />
              </ApprovedRoute>
            } />

            <Route
              path='/dashboard/search-pod' element={
                <ApprovedRoute>
                  <SearchPOD />
                </ApprovedRoute>
              }
            />
            <Route path='/dashboard/pending-client' element={<PendingClient />} />
            <Route path='/dashboard/approve-client' element={<ApproveClient />} />
            <Route path='/dashboard/approved-staff' element={<ApprovedStaff />} />
            <Route path='/dashboard/pending-staff' element={<PendingStaff />} />

          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
