import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminLogin from "./pages/Admin/AdminLogin";
import Home from "./pages/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




export default function App() {

  return(

  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<ProtectedRoute element={<AdminDashboard/>}/>}/>
      <Route path="/login" element={<AdminLogin/>}/>
      <Route path="*" element={<Home/>}/>
     

    </Routes>

  </Router>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  )

}
