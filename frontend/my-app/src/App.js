import { Routes, Route } from "react-router-dom"
import SignUpPage from "./Pages/SignUpPage"
import Login from "./Pages/LoginPage";



function App() {
  return (

    <Routes>
       <Route path="/register" element={<SignUpPage/>} />
       <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
