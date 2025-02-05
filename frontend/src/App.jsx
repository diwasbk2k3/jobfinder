import Home from "./components/public/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopJobs from "./components/public/TopJobs";
import About from "./components/public/About";
import Contact from "./components/public/Contact";
import Login from "./components/public/Login";
import Signup from "./components/public/Signup";
import AdminLogin from "./components/public/AdminLogin";
import AppLayout from "./components/public/AppLayout";

import EmployerLayout from "./components/private/employer/EmployerLayout";
import EmployerDashboard from "./components/private/employer/EmployerDashboard";
import PostNewJobs from "./components/private/employer/PostNewJobs";
import ManageJobs from "./components/private/employer/ManageJobs";
import ViewApplicants from "./components/private/employer/ViewApplicants";

import AdminLayout from "./components/private/admin/AdminLayout";
import AdminDashboard from "./components/private/admin/AdminDashboard";
import ManageEmployer from "./components/private/admin/ManageEmployer";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="jobs" element={<TopJobs />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="admin/login" element={<AdminLogin />} />
        </Route>

        {/* Employer routes */}
        <Route path="/employer" element={<EmployerLayout/>}>
          <Route index element={<EmployerDashboard />} />
          <Route path="dashboard" element={<EmployerDashboard />} />
          <Route path="post-new-job" element={<PostNewJobs />} />
          <Route path="manage-job" element={<ManageJobs />} />
          <Route path="view-applicant" element={<ViewApplicants />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="manage-employer" element={<ManageEmployer />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
