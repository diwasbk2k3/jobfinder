import Home from "./components/public/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopJobs from "./components/public/TopJobs";
import About from "./components/public/About";
import Login from "./components/public/Login";
import Signup from "./components/public/Signup";
import AdminLogin from "./components/public/AdminLogin";
import AppLayout from "./components/public/AppLayout";

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
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="admin/login" element={<AdminLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
