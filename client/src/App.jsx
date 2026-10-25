import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import EmployerLayout from "./layouts/EmployerLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageCompanies from "./pages/admin/ManageCompanies";
import ManageJobs from "./pages/admin/ManageJobs";
import ManageApplications from "./pages/admin/ManageApplications";
import AdminJobBoard from "./pages/admin/AdminJobBoard";

import EmployerDashboard from "./pages/employer/EmployerDashboard";
import CompanyProfile from "./pages/employer/CompanyProfile";
import PostJob from "./pages/employer/PostJob";
import EmployerManageJobs from "./pages/employer/ManageJobs";
import ViewApplicants from "./pages/employer/ViewApplicants";

import AuthGuard from "./components/guards/AuthGuard";
import RoleGuard from "./components/guards/RoleGuard";
import Layout from "./components/Layout";
import Dashboard from "./pages/jobseeker/Dashboard";
import Profile from "./pages/jobseeker/Profile";
import MyApplications from "./pages/jobseeker/MyApplications";
import FindJobs from "./pages/jobseeker/Findjobs";
import SavedJobs from "./pages/jobseeker/SavedJobs";
import Messages from "./pages/jobseeker/Messages";
import Notifications from "./pages/jobseeker/Notifications";
import Settings from "./pages/jobseeker/Settings";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public site: Navbar + Footer */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Admin: only admins */}
          <Route
            path="/admin"
            element={
              <RoleGuard role="admin">
                <AdminLayout />
              </RoleGuard>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="companies" element={<ManageCompanies />} />
            <Route path="jobs" element={<ManageJobs />} />
            <Route path="applications" element={<ManageApplications />} />
            <Route path="job-board" element={<AdminJobBoard />} />
          </Route>

          {/* Employer: only employers */}
          <Route
            path="/employer"
            element={
              <RoleGuard role="employer">
                <EmployerLayout />
              </RoleGuard>
            }
          >
            <Route index element={<EmployerDashboard />} />
            <Route path="company" element={<CompanyProfile />} />
            <Route path="jobs" element={<EmployerManageJobs />} />
            <Route path="jobs/new" element={<PostJob />} />
            <Route path="applicants" element={<ViewApplicants />} />
          </Route>

          {/* Job seeker: guarded layout */}
          <Route
            element={
              <AuthGuard>
                <Layout />
              </AuthGuard>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-applications" element={<MyApplications />} />
            <Route path="/jobs" element={<FindJobs />} />
            <Route path="/saved-jobs" element={<SavedJobs />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          {/* Unknown URL */}
          <Route path="*" element={<div style={{ padding: 40 }}>Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;